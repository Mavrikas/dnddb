import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { Title } from '../Title/Title'
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <AppBar position="static">
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
