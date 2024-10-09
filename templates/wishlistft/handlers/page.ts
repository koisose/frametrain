'use server'
import type { BuildFrameData } from '@/lib/farcaster'
import type { Config } from '..'
import PageView from '../views/Page'

export default async function page({
    body,
    config,
    storage,
    params,
}: {
    body: FramePayloadValidated
    config: Config
    storage: Storage
    params: any
}): Promise<BuildFrameData> {
console.log(storage)
    return {
        buttons: [
            {
                label: 'buy',
            },
            {
                label: '←',
            },
            {
                label: '→',
            },
            {
                label: 'home',
            }
        ],
        aspectRatio: '1:1',
        component: PageView(config),
        handler: 'page_next',
    }
}
