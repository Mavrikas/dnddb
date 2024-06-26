import styles from './LabelValue.module.css'
import { LabelValueProps } from './types'

export const LabelValue = ({ label, value }: LabelValueProps) => {
    return (
        <p className={styles.container}>
            <span className={styles.label}>{label}: </span>
            {value}
        </p>
    )
}
