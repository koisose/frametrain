'use server'
import type {
    BuildFrameData,
    FrameButtonMetadata,
    FrameValidatedActionPayload,
} from '@/lib/farcaster'
import type { Config, Storage } from '..'
import PageView from '../views/Page'
import { FrameError } from '@/sdk/error'
import { parseAbi, type AbiFunction } from 'abitype'
import { getViemClient } from '../utils/viem'
import functionHandler from './function'
import { BaseError, ContractFunctionRevertedError } from 'viem'

export default async function simulate({
    body,
    config,
    params,
    storage,
}: {
    body: FrameValidatedActionPayload
    config: Config
    storage: Storage
    params: { currentIndex: string }
}): Promise<BuildFrameData> {
    if (!config.etherscan) {
        throw new FrameError('Smart Contract config is missing')
    }
    const buttons: FrameButtonMetadata[] = [
        {
            label: '←',
        },
    ]
    const fid = body.validatedData.interactor.fid
    let newStorage = storage

    const buttonIndex = body.validatedData.tapped_button.index as number
    const textInput = (body.validatedData?.input?.text || '') as string
    const rawAbiString = config.etherscan.abis.flatMap((abi) => abi)
    const abiString = rawAbiString.filter((abi) => abi.startsWith('function'))
    const signatureIndex = Number(params.currentIndex)
    const signature = abiString[signatureIndex]
    const baseArgs = textInput.split(',').map((arg) => arg.trim())
    let action: 'read' | 'write' = 'read'
    const existingSignatures = storage?.[fid] || []

    const abiItem = (parseAbi([signature]) as AbiFunction[])[0]
    const functionName = abiItem.name
    const args = abiItem.inputs.map((input, i) => {
        let value
        const arg = baseArgs[i]
        switch (input.type) {
            case 'uint256': {
                value = BigInt(arg || 0)
                break
            }
            case 'address': {
                value = arg as `0x${string}`
                break
            }

            case 'bool': {
                value = arg === 'true'
                break
            }

            case 'string': {
                value = arg
                break
            }

            default: {
                value = Number(arg || 0)
                break
            }
        }

        return value
    })

    newStorage = Object.assign(storage, {
        ...storage,
        [fid]: [
            ...existingSignatures,
            {
                functionName,
                index: signatureIndex,
                args,
            },
        ],
    })

    const isLastFunction = signatureIndex === abiString.length
    console.log(`simulate handler >> signatureIndex: ${signatureIndex}`, {
        textInput,
        total: abiString.length,
        signatureIndex,
        params,
        args,
        newStorage,
        isLastFunction,
        nextIndex: signatureIndex + 1,
    })
    let result: string | null = null

    switch (buttonIndex) {
        case 2: {
            const client = getViemClient(config.etherscan.chainId)
            try {
                const simulation = await client.simulateContract({
                    abi: parseAbi(rawAbiString),
                    functionName,
                    args,
                    address: config.etherscan.address,
                })
                console.log('smulate >> simulation', simulation)
                if (typeof simulation.result !== undefined) {
                    result = Array.isArray(simulation.result)
                        ? (simulation.result as unknown[]).join('\n')
                        : `${simulation.result}`
                    break
                }
                buttons.push({
                    label: functionName,
                    action: 'tx',
                    target: '/contract',
                    postUrl: '/success',
                })
                action = 'write'
            } catch (e) {
                if (e instanceof BaseError) {
                    const revertError = e.walk(
                        (err) => err instanceof ContractFunctionRevertedError
                    )
                    if (revertError instanceof ContractFunctionRevertedError) {
                        throw new FrameError(revertError.shortMessage)

                        // do something with `errorName`
                    }
                }
                const error = e as Error
                throw new FrameError(error.message)
            }
            break
        }
        default: {
            let nextIndex = 1
            // nextIndex = buttonIndex === 1 ? Number(params.currentIndex) : signatureIndex + 1
            if (buttonIndex === 1) {
                nextIndex = signatureIndex === 0 ? abiString.length - 1 : signatureIndex - 1
            } else {
                nextIndex = signatureIndex === abiString.length - 1 ? 0 : signatureIndex + 1
            }
            return functionHandler({
                config,
                body,
                storage: newStorage,
                params: { currentIndex: nextIndex.toString() },
            })
        }
    }
    const nextIndex = signatureIndex + 1

    buttons.push({
        label: '→',
    })

    if (isLastFunction) {
        buttons.push({
            label: 'Create Your Own Frame',
            action: 'link',
            target: 'https://frametra.in',
        })
    }

    return {
        buttons,
        storage: newStorage,
        component: PageView({
            result,
            name: abiItem.name,
            index: nextIndex,
            total: abiString.length,
        }),
        handler: 'function',
        params: {
            currentIndex: nextIndex,
            action,
            functionName,
        },
    }
}
