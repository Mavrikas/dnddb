import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Description } from '../../Description/Description'

export const Skills = ({ data }: { data: any }) => {
    return (
        <Card className={styles.container}>
            <CardContent className={styles.container}>
                <LabelValue
                    label={'Ability Score'}
                    value={data.ability_score.name}
                />
                <Description data={data.desc} />
            </CardContent>
        </Card>
    )
}
