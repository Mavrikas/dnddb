import { Card, CardContent, List, ListItem, Typography } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import Link from 'next/link'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Title } from '../../Title/Title'

export const Races = ({ data }: { data: any }) => {
    const transformAbilityBonuses = (bonuses: any[]) =>
        bonuses.map((bonus, i) => ({
            name: `${bonus.ability_score.name} +${bonus.bonus}`,
        }))

    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <LabelValue label="Speed" value={data.speed} />
                    <LabelValue label="Alignment" value={data.alignment} />
                    <LabelValue label="Age" value={data.age} />
                    <LabelValue label="Size" value={data.size} />
                    <LabelValue
                        label="Size Description"
                        value={data.size_description}
                    />
                    <LinkList
                        data={data.languages}
                        subHeader="Languages"
                        hasLinks={false}
                    />
                    <LabelValue
                        label="Language Description"
                        value={data.language_desc}
                    />

                    <LinkList
                        data={transformAbilityBonuses(data.ability_bonuses)}
                        subHeader="Ability Bonuses"
                        hasLinks={false}
                    />
                    <LinkList
                        data={data.starting_proficiencies}
                        subHeader="Starting Proficiencies"
                        hasLinks={false}
                    />

                    <LinkList
                        data={data.traits}
                        subHeader="Traits"
                        hasLinks={false}
                    />
                    <LinkList
                        data={data.subraces}
                        subHeader="Subraces"
                        hasLinks={false}
                    />
                </CardContent>
            </Card>
        </Suspense>
    )
}
