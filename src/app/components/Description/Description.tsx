import { Typography } from '@mui/material'
import styles from './Description.module.css'
import { DescProps } from './types'

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
        ))
    }
    return (
        <Typography variant="body1" gutterBottom className={styles.text}>
            {data}
        </Typography>
    )
}
