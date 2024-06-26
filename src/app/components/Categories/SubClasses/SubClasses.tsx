import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Description } from '../../Description/Description'

export const SubClasses = ({ data }: { data: any }) => {
    return (
        <Card className={styles.container}>
            <CardContent className={styles.container}>
                <LabelValue label={'Class'} value={data.class.name} />
                <LabelValue
                    label={'Subclass Flavor'}
                    value={data.subclass_flavor}
                />
                <Description data={data.desc} />
            </CardContent>
        </Card>
    )
}
