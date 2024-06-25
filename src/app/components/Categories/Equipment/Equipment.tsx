import { Card, CardContent } from '@mui/material'
import { Suspense } from 'react'
import styles from '../Categories.module.css'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Description } from '../../Description/Description'

export const Equipment = ({ data }: { data: any }) => {
    const getWeaponFields = (category: string) => {
        const isTwoHanded = Object.hasOwn(data, 'two_handed_damage')
        if (category === 'weapon') {
            return (
                <>
                    <LabelValue
                        label={'Weapon Category'}
                        value={data.weapon_category}
                    />
                    <LabelValue
                        label={'Weapon Range'}
                        value={`${data.weapon_range}: ${data.range.normal}${data.range.long ? '/' + data.range.long : ''}`}
                    />
                    <LabelValue
                        label={'Damage'}
                        value={data.damage.damage_dice}
                    />
                    <LabelValue
                        label={'Damage Type'}
                        value={data.damage.damage_type.name}
                    />
                    {isTwoHanded && (
                        <>
                            <LabelValue
                                label={'Two Handed Damage'}
                                value={data.damage.damage_dice}
                            />
                            <LabelValue
                                label={'Two Handed Damage Type'}
                                value={data.damage.damage_type.name}
                            />
                        </>
                    )}
                </>
            )
        }
    }
    const getEquipmentFields = (category: string) => {
        if (category.includes('gear')) {
            return (
                <>
                    <LabelValue
                        label={'Gear Category'}
                        value={data.gear_category.name}
                    />
                </>
            )
        } else if (category.includes('tools')) {
            return (
                <>
                    <LabelValue
                        label={'Tool Category'}
                        value={data.tool_category}
                    />
                </>
            )
        }
    }

    return (
        <Suspense fallback="loading...">
            <Card className={styles.container}>
                <CardContent className={styles.container}>
                    <LabelValue
                        label={'Equipment Category'}
                        value={data.equipment_category.name}
                    />
                    {getWeaponFields(data.equipment_category.index)}
                    {getEquipmentFields(data.equipment_category.index)}
                    <LabelValue
                        label={'Cost'}
                        value={`${data.cost.quantity}${data.cost.unit}`}
                    />
                    <LabelValue label={'Weight'} value={data.weight} />
                    <LinkList data={data.properties} subHeader="Properties" />
                    {Object.hasOwn(data, 'desc') && (
                        <Description data={data.desc} />
                    )}
                </CardContent>
            </Card>
        </Suspense>
    )
}
