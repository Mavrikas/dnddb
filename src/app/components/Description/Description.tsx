import { Typography } from '@mui/material'
import styles from './Description.module.css'

type DescProps = {
    data: string | string[]
}
export const Description = ({ data }: DescProps) => {
    if (Array.isArray(data)) {
        return data.map((item, i) => (
            <Typography
                key={item[0] + i}
                variant="body1"
                gutterBottom
                className={styles.text}
            >
                {item}
            </Typography>
            // <p key={item[0] + i} className={styles.text}>
            //     {item}
            // </p>
        ))
    }
    return (
        <Typography variant="body1" gutterBottom className={styles.text}>
            {data}
        </Typography>
    )
    return <p className={styles.text}>{data}</p>
}
