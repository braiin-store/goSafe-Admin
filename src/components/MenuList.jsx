import { Link, useRouteMatch } from 'react-router-dom'

import { People, Dashboard, LocalTaxi, Lock, ExitToApp } from '@material-ui/icons'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import AuthAPI from '../api/auth.api';

const handleLogout= async()=>{
try {
    await AuthAPI.signOut();

} catch (error) {
    
}
}

const MenuItem = ({ to, icon, title,onClick }) => {
    const match = useRouteMatch({ path: to })

    return (
        <ListItem
            button component={Link} to={to} onClick={onClick}
            title={title} className={match ? "item active" : "item"}
        >
            <ListItemIcon className="item-icon">
                {icon}
            </ListItemIcon>
            <ListItemText className="item-text" primary={title} />
        </ListItem>
    )
}


const MenuList = () => {
    return (
        <>
            <MenuItem to="/home" title="inicio" icon={<Dashboard />} />
            <MenuItem to="/clientes" title="clientes" icon={<People />} />
            <MenuItem to="/conductores" title="conductores" icon={<LocalTaxi />} />
            <MenuItem to="/login" onClick={handleLogout} title="cerrar sesion" icon={<ExitToApp />} />
        </>
    );
};

export default MenuList;