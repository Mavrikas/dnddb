import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import styles from './Grid.module.css'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { GridProps } from './types'

export const Grid = ({ data }: GridProps) => {
    const buildList = () => {
        if (data) {
            return data
                .filter(
                    (item) =>
                        item.name != 'backgrounds' &&
                        item.name != 'rule sections' &&
                        item.name != 'rules'
                )
                .map((item, i) => {
                    return (
                        <Link href={`${item.url}`} key={item.name + i}>
                            <Grid2>
                                <Card className={styles.card}>
                                    <CardContent className={styles.item}>
                                        {item.name}
                                    </CardContent>
                                </Card>
                            </Grid2>
                        </Link>
                    )
                })
        }
    }

    return (
        data && (
            <div className={styles.container}>
                <Grid2 container spacing={2} wrap="wrap">
                    {buildList()}
                </Grid2>
            </div>
        )
    )
}
