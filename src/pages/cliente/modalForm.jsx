import { useState } from 'react'

import {
    Save, Face, Email, Phone, Directions, Replay
} from '@material-ui/icons'

import {
    Fade, Grid, Backdrop, Modal, TextField, Typography, Button, CardMedia
} from '@material-ui/core'

import { URL, save, readFile } from '../../utils/formUtils'

const Form = ({ model = {}, handlePage, closeModal }) => {
    const [img, setImg] = useState(model['foto'] ?? '')

    const onInput = ({ target: { name, value } }) => model[name] = value
    
    const onSubmit = async (e) => {
        e.preventDefault()
        if (img) {
            model['foto'] = img
            await save(`${URL}/clientes`, { model, reloadPage: handlePage })
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container direction="row" spacing={1} justify="center">
                <input
                    hidden
                    type="file"
                    id="img" name="foto"
                    onInput={({ target }) => readFile(target, { model, setImg, closeModal })}
                />
                <Grid item xs={12}>
                    <Typography
                        variant="h5" style={{ paddingTop: 0, paddingBottom: 2 }}>
                        {model['id'] ? 'Editar Cliente' : ' Nuevo Cliente'}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <CardMedia
                        id="img"
                        src={img}
                        component="img"
                        className="media"
                        onClick={() => document.getElementById('img').click()}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        type="text"
                        name="nombre"
                        label="Nombre"
                        variant="outlined"
                        defaultValue={model['nombre']}
                        onChange={onInput}
                        InputProps={{ endAdornment: <Face /> }}
                    />
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        required
                        fullWidth
                        type="email"
                        name="correo"
                        label="Correo"
                        variant="outlined"
                        defaultValue={model['correo']}
                        onChange={onInput}
                        InputProps={{ endAdornment: <Email /> }}
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        required
                        fullWidth
                        type="tel"
                        name="celular"
                        label="Celular"
                        variant="outlined"
                        defaultValue={model['celular']}
                        onChange={onInput}
                        InputProps={{ endAdornment: <Phone /> }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        type="address"
                        name="direccion"
                        label="Dirección"
                        variant="outlined"
                        defaultValue={model['direccion']}
                        onChange={onInput}
                        InputProps={{ endAdornment: <Directions /> }}
                    />
                </Grid>
                <Grid
                    item
                    container
                    spacing={2}
                    justify="flex-end"
                    style={{ paddingTop: 7, paddingBottom: 5 }}
                >
                    {
                        model['id']
                            ? null
                            : <Grid item>
                                <Button
                                    disableElevation
                                    type="reset"
                                    color="default"
                                    variant="contained"
                                    startIcon={<Replay />}
                                    onClick={() => setImg('')}
                                >Limpiar</Button>
                            </Grid>
                    }
                    <Grid item>
                        <Button
                            disableElevation
                            type="submit"
                            color="primary"
                            variant="contained"
                            startIcon={<Save />}
                        >Guardar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
}

const ModalForm = ({ open, model, reloadPage, closeModal }) => {

    const handlePage = () => {
        reloadPage()
        closeModal()
    }

    return (
        <Modal
            className="modal"
            closeAfterTransition

            open={open}
            onClose={closeModal}
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 300 }}
        >
            <Fade in={open}>
                <div className="paper">
                    <Form model={model} handlePage={handlePage} closeModal={closeModal} />
                </div>
            </Fade>
        </Modal>
    );
}

export default ModalForm;