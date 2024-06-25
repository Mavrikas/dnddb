'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useCallback, useEffect, useState } from 'react'
import { getCategories } from './api'
import { Resources } from './types'
import { Grid } from './components/Grid/Grid'
import { Intro } from './components/Intro/Intro'

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
            <Intro />
            <Grid data={resources} />
        </main>
    )
}
