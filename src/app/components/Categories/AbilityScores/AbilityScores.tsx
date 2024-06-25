import { Card, CardContent, List, ListItem, Typography } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import Link from 'next/link'
import { LinkList } from '../../LinkList/LinkList'
import { Title } from '../../Title/Title'
import { Description } from '../../Description/Description'

export const AbilityScores = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <Title type="h3" title={data.full_name} />
                    <Description data={data.desc} />
                    <LinkList data={data.skills} subHeader="Skills" />
                </CardContent>
            </Card>
        </Suspense>
    )
}
