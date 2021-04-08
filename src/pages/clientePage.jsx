import { Add } from '@material-ui/icons'
import { Grid, Button } from '@material-ui/core'

import ModalForm from './cliente/modalForm'
import DataTable from './cliente/dataTable'

import { URL } from '../utils/formUtils'
import { useModal, useFetch } from '../hooks/useState'

const ClientePage = () => {
    const { open, openModal, closeModal } = useModal()
    const { rows, reloadPage } = useFetch(`${URL}/clientes`)

    return <>
        <ModalForm open={open} closeModal={closeModal} reloadPage={reloadPage} />
        <Grid container spacing={1} direction="row">
            <Grid item>
                <Button
                    disableElevation
                    color="primary"
                    variant="contained"
                    startIcon={<Add />}
                    onClick={openModal}
                >
                    Nuevo Cliente
                    </Button>
            </Grid>
            <Grid item xs={12}>
                <DataTable rows={rows} reloadPage={reloadPage} />
            </Grid>
        </Grid>
    </>
}

export default ClientePage