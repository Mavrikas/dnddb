import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Description } from '../../Description/Description'

export const Spells = ({ data }: { data: any }) => {
    return (
        <Card className={styles.container}>
            <CardContent className={styles.container}>
                <LabelValue label={'Level'} value={data.level} />
                <LabelValue label={'Duration'} value={data.duration} />
                <LabelValue label={'Casting Time'} value={data.casting_time} />
                <LabelValue label={'Range'} value={data.range} />
                <LabelValue label={'School'} value={data.school.name} />
                <Description data={data.desc} />
            </CardContent>
        </Card>
    )
}
