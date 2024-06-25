import { ReactNode } from 'react'
import styles from './LabelValue.module.css'

export const LabelValue = ({
    label,
    value,
}: {
    label: string
    value: string | ReactNode
}) => {
    return (
        <p className={styles.container}>
            <span className={styles.label}>{label}: </span>
            {value}
        </p>
    )
}
