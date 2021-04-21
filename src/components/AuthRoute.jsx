import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function AuthRoute({path,children}) {
    const sessionToken =localStorage.getItem('token')
   
    if (sessionToken!=null){
        return (
            <Route path={path} >
                {children}
            </Route>
        )
    }
    else{
        return (
            <Redirect to='/login' >
                
            </Redirect>
        )
    }
    
}
