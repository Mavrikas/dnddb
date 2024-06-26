import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { Description } from '../../Description/Description'
import { LabelValue } from '../../LabelValue/LabelValue'

export const Alignments = ({ data }: { data: any }) => {
    return (
        <Card className={styles.container}>
            <CardContent className={styles.container}>
                <LabelValue label={'Abbreviation'} value={data.abbreviation} />
                <Description data={data.desc} />
            </CardContent>
        </Card>
    )
}
