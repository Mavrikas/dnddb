import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Description } from '../../Description/Description'

export const MagicItems = ({ data }: { data: any }) => {
    return (
        <Card className={styles.container}>
            <CardContent className={styles.container}>
                <LabelValue
                    label={'Equipment Category'}
                    value={data.equipment_category.name}
                />
                <LabelValue label={'Rarity'} value={data.rarity.name} />
                {Object.hasOwn(data, 'desc') && (
                    <Description data={data.desc} />
                )}
            </CardContent>
        </Card>
    )
}
