import Swal from 'sweetalert2';

export const URL = "http://localhost:8000/api";

const isImage = path => {
    const regex = /\.(jpe?g|png|gif|bmp)$/i;
    return regex.test(path) || !path;
}

export const readFile = ({ value, files }, { setImg, closeModal }) => {
    if (isImage(value)) {
        let reader = new FileReader()
        reader.onload = ({ target }) => {
            let base64 = target.result
            // console.log(base64.split('base64,'));
            base64 = base64.split(';base64,')
            console.log({ext: base64[0].split('/').pop(), data: base64.pop()});
            setImg(target.result);
        }
        reader.readAsDataURL(files[0])
    } else {
        closeModal()
        Swal.fire({
            icon: 'warning',
            title: 'Archivo No válido',
            text: 'Debe seleccionar una Imagen',
            confirmButtonText: 'Ok',
        }).then();
    }
}

export const save = async (url, { model, reloadPage }) => {
    console.log(model);
    try {
        let res = await fetch(`${url}/${model.id ?? ''}`, {
            method: model.id ? "PUT" : "POST",
            headers: {
                "Accept": "Application/json",
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(model)
        })

        reloadPage()
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

export const destroy = async (url, { public_id, reloadPage }) => {
    let result = await Swal.fire({
        icon: 'warning',
        title: 'Está seguro?',
        text: 'No podrá deshacer los cambios',
        showCancelButton: true,
        cancelButtonText: 'No',
        confirmButtonText: 'Si',
        cancelButtonColor: 'red',
    });

    if (!result.isConfirmed) return;

    try {
        let res = await fetch(url, {
            method: "DELETE",
            headers: { public_id },
        })

        reloadPage()
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