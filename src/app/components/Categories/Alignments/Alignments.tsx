import { Card, CardContent, List, ListItem, Typography } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import Link from 'next/link'
import { Description } from '../../Description/Description'
import { Title } from '../../Title/Title'

export const Alignments = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <Title
                        type="h3"
                        title={`${data.name} (${data.abbreviation})`}
                    />
                    <Description data={data.desc} />
                </CardContent>
            </Card>
        </Suspense>
    )
}
