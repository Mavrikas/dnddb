import Typography from '@mui/material/Typography'
import styles from './Title.module.css'
import { TitleProps } from './types'

export const Title = ({ title, type = 'h1', extraStyles }: TitleProps) => {
    let subheaderStyles
    if (type != 'h1') {
        subheaderStyles = styles.subheader
    }
    return (
        <Typography
            variant={type}
            gutterBottom
            className={[styles.title, subheaderStyles].join(' ')}
            sx={extraStyles}
        >
            {title}
        </Typography>
    )
}
