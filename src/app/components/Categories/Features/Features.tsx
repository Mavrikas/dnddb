import { Card, CardContent } from '@mui/material'
import styles from '../Categories.module.css'
import { LinkList } from '../../LinkList/LinkList'
import { LabelValue } from '../../LabelValue/LabelValue'
import { Description } from '../../Description/Description'

export const Features = ({ data }: { data: any }) => {
    return (
        <Card className={styles.container}>
            <CardContent className={styles.container}>
                <LabelValue label={'Level'} value={data.level} />
                <LinkList data={[data.class]} subHeader="Class" />
                {Object.hasOwn(data, 'desc') && (
                    <Description data={data.desc} />
                )}
            </CardContent>
        </Card>
    )
}
