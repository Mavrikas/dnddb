import { Card, CardContent, List, ListItem, Typography } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import Link from 'next/link'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Description } from '../../Description/Description'

export const Skills = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <LabelValue
                        label={'Ability Score'}
                        value={data.ability_score.name}
                    />
                    <Description data={data.desc} />
                </CardContent>
            </Card>
        </Suspense>
    )
}
