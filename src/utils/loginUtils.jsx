
import Swal from "sweetalert2";
import AuthAPI from "../api/auth.api";

const loginUtil = {
	save: async (form) => {
        
		// console.log(form);
		try {
            // api
			const data = await AuthAPI.signIn(form);
			// console.log(data);

            // api end
             localStorage.setItem('token',data.token)
			await Swal.fire({
				timer: 1300,
				icon: "success",
				title: "Logueado !!",
				text: "Sesion iniciada Correctamente!",
				showConfirmButton: true,
                confirmButtonText: 'Continuar',
                
			});
                   
		} catch (error) {
			console.error(error);
			await Swal.fire({
				icon: "error",
				title: "Ups...",
				text: "Algo Salió mal",
			});
		}
	},
};
export default loginUtil;


