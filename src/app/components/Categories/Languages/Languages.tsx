import { Card, CardContent, List, ListItem, Typography } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import listStyles from '../../LinkList/LinkList.module.css'
import Link from 'next/link'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Section } from '../../Section/Section'

export const Languages = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <LabelValue label={'Type'} value={data.type} />
                    <LabelValue label={'Script'} value={data.script} />
                    {data.typical_speakers.length > 0 && (
                        <List
                            subheader={'Typical Speakers'}
                            className={listStyles.list}
                        >
                            {data.typical_speakers.map(
                                (item: string, i: number) => {
                                    return (
                                        <ListItem key={item + i}>
                                            {item}
                                        </ListItem>
                                    )
                                }
                            )}
                        </List>
                    )}
                </CardContent>
            </Card>
        </Suspense>
    )
}
