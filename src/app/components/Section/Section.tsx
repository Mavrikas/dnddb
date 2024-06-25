import { ReactNode } from 'react'
import styles from './Section.module.css'
import { Title } from '../Title/Title'

export const Section = ({
    title,
    children,
}: {
    title: string
    children: any
}) => {
    return (
        <div className={styles.container}>
            <Title type="h4" title={title} />
            <div className={styles.body}>{children}</div>
        </div>
    )
}
