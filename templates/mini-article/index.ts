import type { BaseConfig, BaseStorage, BaseTemplate } from '@/lib/types'
import Inspector from './Inspector'
import cover from './cover.webp'
import handlers from './handlers'
interface SectionList{
    content: string
    type:string
}
export interface Config extends BaseConfig {
    sectionList: SectionList[]
}

export interface Storage extends BaseStorage {}

export default {
    name: 'Mini Article',
    description: 'Creating article and convert it to frame straight away',
    shortDescription: 'Create article',
    octicon: 'book', // https://docs.farcaster.xyz/reference/actions/spec#valid-icons
    creatorFid: '334841',
    creatorName: 'koisose',
    cover,
    enabled: true,
    Inspector,
    handlers,
    initialConfig: {
        sectionList: [],
    },
    events: [],
} satisfies BaseTemplate
