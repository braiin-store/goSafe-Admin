import {url} from './api.utils'
export const suscriptionAPI={
    all:async()=>{
             try {
                const res = await fetch(`${url}/suscripciones`, {
                    method: "GET",
                    headers: {
                        Accept: "Application/json",
                        "Content-Type": "Application/json",
                        'x-access-token': localStorage.getItem('token')
                    }
                });
                
                const data = await res.json();
                return data;
             } catch (error) {
                 console.log(error);
             }   
    },
    subscribeDriver:async(data)=>{
        try {
            const res= await fetch(`${url}/conductores/suscribir`, {
                method: "POST",
                headers: {
                    Accept: "Application/json",
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(data),
            });
        } catch (error) {
            console.log(error);
        }
    }
}