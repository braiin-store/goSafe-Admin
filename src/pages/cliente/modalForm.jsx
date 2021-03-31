/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

import {
    Save, Face, Email, Phone, Directions, Replay
} from '@material-ui/icons'

import {
    Fade, Grid, Backdrop, Modal, TextField, Typography, Button, CardMedia
} from '@material-ui/core'

import './cliente.css'
import { URL, useSave, useFileRead } from '../../hooks/model.hook'

const Form = ({ model = {}, setOpen, setReload }) => {
    const [img, setImg] = useState(model['foto'] ?? '')
    const onInput = ({ target: { name, value } }) => {
        model[name] = value
        console.log(model);
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        await useSave(`${URL}/clientes`, { model, setOpen, setReload })
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container direction="row" spacing={1} justify="center">
                <input
                    hidden type="file" name="foto" id="img"
                    onInput={(e) => useFileRead(e.target.name, { model, setImg })}
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
                        fullWidth
                        required
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
                                    type="reset"
                                    color="default"
                                    variant="contained"
                                    startIcon={<Replay />}
                                >Limpiar</Button>
                            </Grid>
                    }
                    <Grid item>
                        <Button
                            type="submit"
                            color="primary"
                            style={{ background: model['id'] ? 'green' : null }}
                            variant="contained"
                            startIcon={<Save />}
                        >Guardar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
}

const ModalForm = ({ model = {}, open, setOpen, setReload }) => {
    return (
        <Modal
            closeAfterTransition
            open={open}
            className="modal"
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 300 }}

            onClose={() => setOpen(false)}
        >
            <Fade in={open}>
                <div className="paper">
                    <Form setOpen={setOpen} setReload={setReload} model={model} />
                </div>
            </Fade>
        </Modal>
    );
}

export default ModalForm;