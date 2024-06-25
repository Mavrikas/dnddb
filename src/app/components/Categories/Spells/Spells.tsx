import { Card, CardContent, List, ListItem, Typography } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import Link from 'next/link'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Description } from '../../Description/Description'

export const Spells = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <LabelValue label={'Level'} value={data.level} />
                    <LabelValue label={'Duration'} value={data.duration} />
                    <LabelValue
                        label={'Casting Time'}
                        value={data.casting_time}
                    />
                    <LabelValue label={'Range'} value={data.range} />
                    <LabelValue label={'School'} value={data.school.name} />
                    <Description data={data.desc} />
                </CardContent>
            </Card>
        </Suspense>
    )
}
