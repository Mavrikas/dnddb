import { Title } from '../Title/Title'
import styles from './Intro.module.css'

export const Intro = () => {
    return (
        <>
            <Title type="h1" title={'Welcome to Dungeons & Dragons DB'} />
            <p className={styles.text}>
                This is a project made for fun, using the
                <a href="https://5e-bits.github.io/docs/"> D&D 5e SRD API</a>
            </p>
        </>
    )
}
