import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'

export const Races = ({ data }: { data: any }) => {
    const transformAbilityBonuses = (bonuses: any[]) =>
        bonuses.map((bonus, i) => ({
            name: `${bonus.ability_score.name} +${bonus.bonus}`,
        }))

    return (
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
    )
}
