import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <AppBar position="static" className={styles.header} color="inherit">
            <Container maxWidth="xl" className={styles.container}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        className={styles.navItem}
                    >
                        Home
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/About"
                        className={styles.navItem}
                    >
                        About
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
