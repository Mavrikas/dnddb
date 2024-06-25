'use client'
import Image from 'next/image'
import styles from '../page.module.css'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { getCategories, getCategoryData } from '../api'
import { Grid } from '../components/Grid/Grid'
import { Title } from '../components/Title/Title'
import { AbilityScores } from '../components/Categories/AbilityScores/AbilityScores'
import { Alignments } from '../components/Categories/Alignments/Alignments'
import { Backgrounds } from '../components/Categories/Backgrounds/Backgrounds'
import { Classes } from '../components/Categories/Classes/Classes'
import { Conditions } from '../components/Categories/Conditions/Conditions'
import { DamageTypes } from '../components/Categories/DamageTypes/DamageTypes'
import { Equipment } from '../components/Categories/Equipment/Equipment'
import { EquipementCategories } from '../components/Categories/EquipmentCategories/EquipmentCategories'
import { Features } from '../components/Categories/Features/Features'
import { Languages } from '../components/Categories/Languages/Languages'
import { MagicItems } from '../components/Categories/MagicItems/MagicItems'
import { MagicSchools } from '../components/Categories/MagicSchools/MagicSchools'
import { Monsters } from '../components/Categories/Monsters/Monsters'
import { Proficiencies } from '../components/Categories/Proficiencies/Proficiencies'
import { Races } from '../components/Categories/Races/Races'
import { Skills } from '../components/Categories/Skills/Skills'
import { Spells } from '../components/Categories/Spells/Spells'
import { SubClasses } from '../components/Categories/SubClasses/SubClasses'
import { SubRaces } from '../components/Categories/SubRaces/SubRaces'
import { Traits } from '../components/Categories/Traits/Traits'
import { WeaponProperties } from '../components/Categories/WeaponProperties/WeaponProperties'
import { Feats } from '../components/Categories/Feats/Feats'

export default function resourcePage({
    params,
}: {
    params: { resource: string[] }
}) {
    const [resources, setResources] = useState()

    const getData = useCallback(async () => {
        setResources(await getCategoryData(params.resource))
    }, [])

    useEffect(() => {
        getData()
    }, [])

    const getBody = (res) => {
        if (Array.isArray(res)) {
            return <Grid data={res} />
        } else if (res) {
            switch (params.resource[1]) {
                case 'ability-scores':
                    return <AbilityScores data={res} />
                case 'alignments':
                    return <Alignments data={res} />
                case 'classes':
                    return <Classes data={res} />
                case 'conditions':
                    return <Conditions data={res} />
                case 'damage-types':
                    return <DamageTypes data={res} />
                case 'equipment':
                    return <Equipment data={res} />
                case 'equipment-categories':
                    return <EquipementCategories data={res} />
                case 'feats':
                    return <Feats data={res} />
                case 'features':
                    return <Features data={res} />
                case 'languages':
                    return <Languages data={res} />
                case 'magic-items':
                    return <MagicItems data={res} />
                case 'magic-schools':
                    return <MagicSchools data={res} />
                case 'monsters':
                    return <Monsters data={res} />
                case 'proficiencies':
                    return <Proficiencies data={res} />
                case 'races':
                    return <Races data={res} />
                case 'skills':
                    return <Skills data={res} />
                case 'spells':
                    return <Spells data={res} />
                case 'subclasses':
                    return <SubClasses data={res} />
                case 'subraces':
                    return <SubRaces data={res} />
                case 'traits':
                    return <Traits data={res} />
                case 'weapon-properties':
                    return <WeaponProperties data={res} />
            }
        }
    }

    return (
        <main className={styles.main}>
            <Title
                title={
                    resources?.name != undefined
                        ? resources.name
                        : params.resource[params.resource.length - 1]
                }
            />
            <Suspense fallback={'loading...'}>{getBody(resources)}</Suspense>
        </main>
    )
}
