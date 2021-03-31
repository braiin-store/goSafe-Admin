import React from 'react'
import Swal from 'sweetalert2';

export const URL = "http://localhost:8000/api";

const isImage = path => {
    const regex = /\.(jpe?g|png|gif|bmp)$/i;
    return regex.test(path) || !path;
}

export const useFileRead = (imgName, { model, setImg }) => {
    let input = document.getElementById('img')
    if (isImage(input.value)) {
        let reader = new FileReader()

        reader.onload = ({ target }) => {
            setImg(model[imgName] = target.result)
            console.log(model);
        };

        reader.readAsDataURL(input.files[0])
    } else {
        alert('Archivo No válido')
    }
}

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

export const useSave = async (url, { model, setOpen, setReload }) => {
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
            timer: 1300,
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

export const useDelete = async (url, { public_id, setReload }) => {
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
        let res = await fetch(url, {
            method: "DELETE",
            headers: { public_id },
        })

        setReload(true)
        console.log(await res.json());

        await Swal.fire({
            timer: 1300,
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