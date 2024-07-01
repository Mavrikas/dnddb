import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { Description } from '../../Description/Description'

export const WeaponProperties = ({ data }: { data: any }) => {
    return (
        <Card className={styles.container}>
            <CardContent className={styles.container}>
                <Description data={data.desc} />
            </CardContent>
        </Card>
    )
}
