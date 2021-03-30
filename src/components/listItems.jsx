import React from 'react';
import { Link } from 'react-router-dom'
import {
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'

import {
    People,
    Dashboard,
} from '@material-ui/icons'

export const mainListItems = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} to="/clientes">
            <ListItemIcon>
                <People />
            </ListItemIcon>
            <ListItemText primary="Clientes" />
        </ListItem>
        <ListItem button component={Link} to="/conductores">
            <ListItemIcon>
                <People />
            </ListItemIcon>
            <ListItemText primary="Conductores" />
        </ListItem>
    </div>
);