import styles from './About.module.css'

const About = () => {
    return (
        <main className={styles.container}>
            <p className={styles.text}>
                This is a project made for fun, using the{' '}
                <a
                    className={styles.link}
                    href="https://5e-bits.github.io/docs/"
                >
                    D&D 5e SRD API
                </a>
                <br />
                It is created using Typescript, React, NextJS and MaterialUI.
            </p>
        </main>
    )
}

export default About
