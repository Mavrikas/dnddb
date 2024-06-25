import { Card, CardContent, List, ListItem, Typography } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import Link from 'next/link'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Section } from '../../Section/Section'
import { Description } from '../../Description/Description'

export const Feats = ({ data }: { data: any }) => {
    const getPrerequisitesInfo = (reqs: any[]) =>
        reqs.map((req, i) => (
            <>
                <LabelValue
                    key={req.ability_score.name[0] + i}
                    label={`Minimum Score`}
                    value={req.minimum_score}
                />

                <LabelValue
                    label={'Ability Score'}
                    value={
                        <Link
                            href={req.ability_score.url}
                            key={req.ability_score.name + i}
                        >
                            {req.ability_score.name}
                        </Link>
                    }
                />
            </>
        ))
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <Description data={data.desc} />
                    {getPrerequisitesInfo(data.prerequisites)}
                </CardContent>
            </Card>
        </Suspense>
    )
}
