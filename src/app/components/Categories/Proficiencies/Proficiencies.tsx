import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { LabelValue } from '../../LabelValue/LabelValue'

export const Proficiencies = ({ data }: { data: any }) => {
    return (
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
    )
}
