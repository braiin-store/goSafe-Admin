import clsx from 'clsx';
import React from 'react';
import { Menu, ChevronLeft } from '@material-ui/icons'

import {
    List,
    Drawer,
    AppBar,
    Toolbar,
    Divider,
    Container,
    IconButton,
    CssBaseline,
} from '@material-ui/core'

import { useStyles } from './styles';
import { mainListItems } from './listItems';

const Dashboard = ({ child }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <Menu />
                    </IconButton>
                    <h2>Dashboard</h2>
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
                <List>{mainListItems}</List>
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