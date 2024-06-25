import { Card, CardContent } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Description } from '../../Description/Description'

export const Monsters = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <Description data={data.desc} />

                    <LabelValue label={'Size'} value={data.size} />
                    <LabelValue label={'Type'} value={data.type} />
                    {data.subtype && (
                        <LabelValue label={'Sub-type'} value={data.subtype} />
                    )}
                    <LabelValue label={'Alignment'} value={data.alignment} />
                    <LabelValue label={'Hit Points'} value={data.hit_points} />
                    <LabelValue label={'Hit Dice'} value={data.hit_dice} />
                    <LabelValue
                        label={'Hit Point Roll'}
                        value={data.hit_point_roll}
                    />
                    {data.speed.walk && (
                        <LabelValue
                            label={'Speed: Walk'}
                            value={data.speed.walk}
                        />
                    )}
                    {data.speed.burrow && (
                        <LabelValue
                            label={'Speed: Burrow'}
                            value={data.speed.burrow}
                        />
                    )}
                    {data.speed.climb && (
                        <LabelValue
                            label={'Speed: Climb'}
                            value={data.speed.climb}
                        />
                    )}
                    {data.speed.fly && (
                        <LabelValue
                            label={'Speed: Fly'}
                            value={data.speed.fly}
                        />
                    )}
                    {data.speed.swim && (
                        <LabelValue
                            label={'Speed: Swim'}
                            value={data.speed.swim}
                        />
                    )}
                    <LabelValue label={'Strength'} value={data.strength} />
                    <LabelValue label={'Dexterity'} value={data.dexterity} />
                    <LabelValue
                        label={'Constitution'}
                        value={data.constitution}
                    />
                    <LabelValue
                        label={'Intelligence'}
                        value={data.intelligence}
                    />
                    <LabelValue label={'Wisdom'} value={data.wisdom} />
                    <LabelValue label={'Charisma'} value={data.charisma} />
                    <LabelValue
                        label={'Challenge Rating'}
                        value={data.challenge_rating}
                    />
                    <LabelValue label={'Experience'} value={data.xp} />
                </CardContent>
            </Card>
        </Suspense>
    )
}
