import type { BaseConfig, BaseStorage, BaseTemplate } from '@/lib/types'
import Inspector from './Inspector'
import cover from './cover.webp'
import handlers from './handlers'

export interface Config extends BaseConfig {
    text: string
    who:string
}

export interface Storage extends BaseStorage {}

export default {
    name: 'Superfluid',
    description: 'Request superfluid stream',
    shortDescription: 'Request superfluid stream',
    octicon: 'gear', // https://docs.farcaster.xyz/reference/actions/spec#valid-icons
    creatorFid: '0',
    creatorName: 'FrameTrain',
    cover,
    enabled: true,
    Inspector,
    handlers,
    initialConfig: {
        text: 'Default Text',
    },
    events: [],
} satisfies BaseTemplate
