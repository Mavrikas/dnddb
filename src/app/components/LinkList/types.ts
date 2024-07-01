import { Url } from 'next/dist/shared/lib/router/router'

type Data = {
    url?: Url
    name: string
    index?: string
}
export type LinkListProps = {
    subHeader: string
    data: Data[]
    hasLinks?: boolean
}
