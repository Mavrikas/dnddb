import { Card, CardContent } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'

export const Proficiencies = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <LabelValue label={'Type'} value={data.type} />
                    {data.classes.length > 0 && (
                        <LabelValue
                            label={'Classes'}
                            value={data.classes
                                .map((clas: any, i: number) => {
                                    return clas.name
                                })
                                .join(', ')}
                        />
                    )}
                    {data.races.length > 0 && (
                        <LabelValue
                            label={'Races'}
                            value={data.races
                                .map((race: any, i: number) => {
                                    return race.name
                                })
                                .join(', ')}
                        />
                    )}
                </CardContent>
            </Card>
        </Suspense>
    )
}
