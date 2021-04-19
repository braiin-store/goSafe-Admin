export const url = "http://localhost:8000/api";
const AuthAPI={
      signIn:async(form)=> {
        let res = await fetch(`${url}/signin`, {
            method: "POST",
            headers: {
                Accept: "Application/json",
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(form),
        });
    
        const data = await res.json();
        return data;
    },
    signOut:async()=> {
        let res = await fetch(`${url}/signout`, {
            method: "POST",
            headers: {
                Accept: "Application/json",
                "Content-Type": "Application/json",
                'x-access-token': localStorage.getItem('token')
            },

            body: JSON.stringify({}),
        });
    
        const data = await res.json();
        return data;
    }
}
export default AuthAPI