import { Card, CardContent } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import { Description } from '../../Description/Description'

export const WeaponProperties = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <Description data={data.desc} />
                </CardContent>
            </Card>
        </Suspense>
    )
}
