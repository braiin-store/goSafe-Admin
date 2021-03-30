import React, { useState } from 'react'

import {
    Face, Email, Phone, Directions,
} from '@material-ui/icons'
import {
    Fade, Grid, Backdrop, Modal, TextField, Typography, Button
} from '@material-ui/core'

import useStyles from '../../hooks/useStyles'

const Form = ({ model = {} }) => {
    const onInput = ({ target: { name, value } }) => {
        model[name] = value
        console.log(model);
    }

    return (
        <form>
            <Grid container direction="row" spacing={1}>
                <Grid item>
                    <Typography variant="h5">Formulario Cliente</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        required
                        type="text"
                        name="nombre"
                        label="Nombre"
                        variant="outlined"
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
                        onChange={onInput}
                        InputProps={{ endAdornment: <Email /> }}
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        required
                        type="tel"
                        name="telefono"
                        label="Celular"
                        variant="outlined"
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
                        onChange={onInput}
                        InputProps={{ endAdornment: <Directions /> }}
                    />
                </Grid>
                <Grid item container spacing={2} justify="flex-end">
                    <Grid item>
                        <Button
                            type="reset"
                            color="inherit"
                            variant="contained"
                        >Limpiar</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            variant="contained"
                        >Guardar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
}

const ModalForm = ({ model = {} }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button type="button" onClick={() => setOpen(true)}>
                react-transition-group
            </button>
            <Modal
                closeAfterTransition
                open={open}
                className={classes.modal}
                onClose={() => setOpen(false)}

                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 300 }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Form />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default ModalForm;