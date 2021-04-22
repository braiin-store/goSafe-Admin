import {url} from './api.utils'
export const suscriptionAPI={
    all:async()=>{
             try {
                let res = await fetch(`${url}/suscripciones`, {
                    method: "GET",
                    headers: {
                        Accept: "Application/json",
                        "Content-Type": "Application/json",
                    }
                });
                
                const data = await res.json();
                return data;
             } catch (error) {
                 console.log(error);
             }   
    }
}