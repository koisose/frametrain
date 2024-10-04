import type { BaseConfig, BaseStorage, BaseTemplate } from '@/lib/types'
import Inspector from './Inspector'
import cover from './cover.webp'
import handlers from './handlers'

export interface Config extends BaseConfig {
    text: string
}

export interface Storage extends BaseStorage {}

export default {
    name: 'Polygon Moxie Fan Token',
    description: 'Buy moxie fan token using polygon',
    shortDescription: 'Buy FT',
    octicon: 'gear', // https://docs.farcaster.xyz/reference/actions/spec#valid-icons
    creatorFid: '334841',
    creatorName: 'koisose',
    cover,
    enabled: true,
    Inspector,
    handlers,
    initialConfig: {
        text: 'Default Text',
    },
    events: [],
} satisfies BaseTemplate
