'use client'
import { Button, Input } from '@/sdk/components'
import { useFrameConfig } from '@/sdk/hooks'
import { Configuration } from '@/sdk/inspector'
import { useRef } from 'react'
import type { Config } from '.'

export default function Inspector() {
    const [config, updateConfig] = useFrameConfig<Config>()

    const { fantokens } = config

    const displayLabelInputRef = useRef<HTMLInputElement>(null)

    return (
        <Configuration.Root>
            <Configuration.Section title="Set Fan Token">
                <Input
                    className="text-lg"
                    placeholder="Input username or channel name"
                    ref={displayLabelInputRef}
                />
                  <Input
                    className="text-lg"
                    type="number"
                    placeholder="Quantity"
                    ref={displayLabelInputRef}
                />
                <Button
                    onClick={() => {
                        if (!displayLabelInputRef.current?.value) return

                        updateConfig({ text: displayLabelInputRef.current.value })

                        displayLabelInputRef.current.value = ''
                    }}
                    className="w-full bg-border hover:bg-secondary-border text-primary"
                >
                    Add Fan Token
                </Button>
            <h1 className="font-bold">Fan Token List</h1>
            {fantokens?.map(ft=><div className="flex items-center justify-between">
                
                <p>{ft.fantoken}</p>
                <p>{ft.quantity}</p>
                <Button className="h-full bg-red-500">
                    delete
                </Button>
            </div>)}
            
            </Configuration.Section>
        </Configuration.Root>
    )
}
