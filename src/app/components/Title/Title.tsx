import Typography from '@mui/material/Typography'
import styles from './Title.module.css'

export const Title = ({
    title,
    type = 'h1',
}: {
    title: string
    type: 'h1' | 'h2' | 'h3' | 'h4'
}) => {
    let extraStyles
    if (type != 'h1') {
        extraStyles = styles.subheader
    }
    return (
        <Typography
            variant={type}
            gutterBottom
            className={[styles.title, extraStyles].join(' ')}
        >
            {title}
        </Typography>
    )
}
