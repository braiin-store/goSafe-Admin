import clsx from 'clsx'

import { useState } from 'react'
import { Menu, ChevronLeft } from '@material-ui/icons'
import { List, Drawer, AppBar, Toolbar, Divider, Container, IconButton, CssBaseline, Button } from '@material-ui/core'

import './dashboard.css'

import MenuList from '../MenuList'
import useStyles from './dashboard.style'

const Dashboard = ({ child }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start" color="inherit"
                        onClick={() => setOpen(true)}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <Menu />
                    </IconButton>
                    <h2>GoSafe Panel</h2>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronLeft />
                    </IconButton>
                </div>
                <Divider />
                <List component={MenuList} />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {child}
                </Container>
            </main>
        </div>
    );
}

export default Dashboard;