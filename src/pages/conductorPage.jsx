import { Add } from '@material-ui/icons'
import { Grid, Button } from '@material-ui/core'

import ModalForm from './conductor/modalForm'
import DataTable from './conductor/dataTable'

import { URL } from '../utils/formUtils'
import { useModal, useFetch } from '../hooks/useState'

const ConductorPage = () => {
    const { open, openModal, closeModal } = useModal()

    const { rows, reloadPage } = useFetch(`${URL}/conductores`)

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
                >Nuevo Conductor</Button>
            </Grid>
            <Grid item xs={12}>
                <DataTable rows={rows} openModal={openModal} reloadPage={reloadPage} />
            </Grid>
        </Grid>
    </>
}

export default ConductorPage