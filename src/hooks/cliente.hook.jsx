import Swal from 'sweetalert2';
import React from 'react'

export const useFetch = (url, { reload, setReload }) => {
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
        if (reload) {
            setReload(false)
            fetch(url)
                .then(async res => setRows(await res.json()))
                .catch(error => console.error(error))
        }
    }, [url, reload, setReload]);

    return rows;
}

export const save = async (url, { model, setOpen, setReload }) => {
    try {
        let res = await fetch(`${url}/${model.id ?? ''}`, {
            method: model.id ? "PUT" : "POST",
            headers: {
                "Accept": "Application/json",
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(model)
        })

        setOpen(false)
        setReload(true)

        console.log(await res.json())

        await Swal.fire({
            timer: 1000,
            icon: 'success',
            title: 'Guardado !!',
            text: 'Guardado Correctamente!',
            showConfirmButton: false,
        })
    } catch (error) {
        console.error(error);
        await Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Algo Salió mal'
        })
    }
}

export const destroy = async (url, setReload) => {

    let result = await Swal.fire({
        icon: 'warning',
        title: 'Está seguro?',
        text: 'No podrá deshacer los cambios',
        showCancelButton: true,
        cancelButtonText: 'No...',
        confirmButtonText: 'Si !',
    });

    if (!result.isConfirmed) return;

    try {
        let res = await fetch(url, { method: "DELETE" })

        setReload(true)
        console.log(await res.json());

        await Swal.fire({
            timer: 1000,
            icon: 'success',
            title: 'Eliminado !',
            text: 'Se eliminó Correctamente',
            showConfirmButton: false,
        })
    } catch (error) {
        console.error(error);
        await Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Algo Salió mal'
        })
    }
}