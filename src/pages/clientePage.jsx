import { useState } from 'react'

import { Add } from '@material-ui/icons'
import { Grid, Button, Typography, Paper } from '@material-ui/core'

import './cliente/styles.css'

import Datatable from './cliente/dataTable'
import ModalForm from './cliente/modalForm'

import { URL, useFetch } from '../hooks/modelHook'

const ClientePage = () => {
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(true);

    const rows = useFetch(`${URL}/clientes`, { reload, setReload })

    return <>
        <ModalForm open={open} setOpen={setOpen} setReload={setReload} />
        <Grid container spacing={1} direction="row" alignItems="baseline" justify="center">
            <Grid item xs={12} container spacing={3} justify="space-between">
                <Grid item>
                    <Typography variant="h4"><strong>CLIENTES</strong></Typography>
                </Grid>
                <Grid item>
                    <Button
                        color="primary"
                        variant="contained"
                        startIcon={<Add />}
                        onClick={() => setOpen(true)}
                    >
                        Nuevo Cliente
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Datatable rows={rows} setReload={setReload} />
                </Paper>
            </Grid>
        </Grid>
    </>;
}

export default ClientePage;