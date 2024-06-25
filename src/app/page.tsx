'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useCallback, useEffect, useState } from 'react'
import { getCategories } from './api'
import { Resources } from './types'
import { Grid } from './components/Grid/Grid'
import { Title } from './components/Title/Title'

export default function Home() {
    const [resources, setResources] = useState<Resources[]>()

    const getData = useCallback(async () => {
        setResources(await getCategories())
    }, [])

    useEffect(() => {
        getData()
    }, [])

    return (
        <main className={styles.main}>
            <Title type="h1" title={'Welcome to Dungeons & Dragons DB'} />
            <Grid data={resources} />
        </main>
    )
}
