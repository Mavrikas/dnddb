import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { LinkList } from '../../LinkList/LinkList'
import { Description } from '../../Description/Description'
import { LabelValue } from '../../LabelValue/LabelValue'

export const SubRaces = ({ data }: { data: any }) => {
    const getAbilityBonuses = (abs: any[]) =>
        abs.map((ab, i) => (
            <LabelValue
                label={`Ability Score`}
                value={`${ab.ability_score.name} +${ab.bonus}`}
            />
        ))
    return (
        <Card className={styles.container}>
            <CardContent className={styles.container}>
                <LabelValue label={'Race'} value={data.race.name} />
                {getAbilityBonuses(data.ability_bonuses)}
                <LinkList
                    data={data.racial_traits}
                    subHeader="Racial Traits"
                    hasLinks={false}
                />
                {data.starting_proficiencies.length > 0 && (
                    <LinkList
                        data={data.starting_proficiencies}
                        subHeader="Starting Proficiencies"
                        hasLinks={false}
                    />
                )}
                <Description data={data.desc} />
            </CardContent>
        </Card>
    )
}
