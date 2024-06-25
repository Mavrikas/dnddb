import { Card, CardContent, List, ListItem, Typography } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import Link from 'next/link'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Section } from '../../Section/Section'
import { Description } from '../../Description/Description'

export const Classes = ({ data }: { data: any }) => {
    const getList = (items: any[]) => {
        return items.map((item, i: number) => {
            return (
                <LabelValue
                    key={item.desc[0] + i}
                    label={`Choose ${item.choose}`}
                    value={item.desc}
                />
            )
        })
    }
    const getSpellInfo = (spells: any[]) =>
        spells.map((spell, i) => (
            <>
                <LabelValue
                    key={spell.desc[0] + i}
                    label={`Name`}
                    value={spell.name}
                />
                <Description data={spell.desc} />
            </>
        ))
    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <LabelValue label={'Hit die'} value={data.hit_die} />
                    <LinkList
                        data={data.proficiencies}
                        subHeader="Proficiencies"
                    />
                    <LinkList
                        data={data.saving_throws}
                        subHeader="Saving Throws"
                    />

                    <Section title="Starting Equipment">
                        {getList(data.starting_equipment_options)}
                    </Section>
                    <LinkList data={data.subclasses} subHeader="Subclasses" />

                    {data.spellcasting && (
                        <Section title="Spellcasting">
                            <LabelValue
                                label={'Level'}
                                value={data.spellcasting.level}
                            />
                            <LabelValue
                                label={'Spellcasting Ability'}
                                value={
                                    data.spellcasting.spellcasting_ability.name
                                }
                            />
                            {getSpellInfo(data.spellcasting.info)}
                        </Section>
                    )}
                </CardContent>
            </Card>
        </Suspense>
    )
}
