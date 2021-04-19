import Swal from 'sweetalert2';
export const URL = "http://localhost:8000/api";
export const save = async (url, { model, reloadPage }) => {
    console.log(model);
    try {
        let res = await fetch(`${url}/signin`, {
            method: "POST",
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
            title: 'Logueado !!',
            text: 'Sesion iniciada Correctamente!',
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