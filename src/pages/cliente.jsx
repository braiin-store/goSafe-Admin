import {
    Grid,
    Button,
    Typography,
} from '@material-ui/core'

import { Add } from '@material-ui/icons'

import ModalForm from './cliente/form'

const ClientePage = () => {
    return <>
        <Grid container spacing={1} alignItems="baseline" justify="space-between">
            <Grid item xs={12} container spacing={3} justify="space-between">
                <Grid item>
                    <Typography variant="h4"><strong>CLIENTES</strong></Typography>
                </Grid>
                <Grid item>
                    <Button color="primary" variant="contained" startIcon={<Add />}>
                        Nuevo Cliente
                    </Button>
                </Grid>
            </Grid>
            <ModalForm />
        </Grid>
    </>;
}

export default ClientePage;