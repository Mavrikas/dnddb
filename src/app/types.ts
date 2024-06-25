export type Resources = {
    name: string
    url: string
}
type Skill = {
    index: string
    level: number
    url: string
}
type AbilityScore = {
    index: string
    level: number
    name: string
    url: string
    desc: string[]
    full_name: string
    skills: Skill[]
}
