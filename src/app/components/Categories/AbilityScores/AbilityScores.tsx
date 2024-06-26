import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { LinkList } from '../../LinkList/LinkList'
import { Description } from '../../Description/Description'

export const AbilityScores = ({ data }: { data: any }) => {
    return (
        <Card className={styles.container}>
            <CardContent className={styles.container}>
                <Description data={data.desc} />
                <LinkList data={data.skills} subHeader="Skills" />
            </CardContent>
        </Card>
    )
}
