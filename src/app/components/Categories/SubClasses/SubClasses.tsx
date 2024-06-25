import { Card, CardContent, List, ListItem, Typography } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import Link from 'next/link'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Description } from '../../Description/Description'

export const SubClasses = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
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
        </Suspense>
    )
}
