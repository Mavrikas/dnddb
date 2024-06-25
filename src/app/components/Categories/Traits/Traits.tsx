import { Card, CardContent } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import { LinkList } from '../../LinkList/LinkList'
import { Description } from '../../Description/Description'
import { LabelValue } from '../../LabelValue/LabelValue'

export const Traits = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <LinkList
                        data={data.races}
                        subHeader="Races"
                        hasLinks={false}
                    />
                    {Object.hasOwn(data, 'parent') && (
                        <LabelValue label={'Parent'} value={data.parent.name} />
                    )}
                    <Description data={data.desc} />
                </CardContent>
            </Card>
        </Suspense>
    )
}
