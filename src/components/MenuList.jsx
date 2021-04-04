import { Link, useRouteMatch } from 'react-router-dom'

import { People, Dashboard, LocalTaxi } from '@material-ui/icons'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

const MenuItem = ({ to, icon, title }) => {
    const match = useRouteMatch({ path: to })

    return (
        <ListItem
            button component={Link} to={to}
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
        </>
    );
};

export default MenuList;