import React from 'react'


export default function AuthRoute({path,children}) {
    const sessionToken =localStorage.getItem('token')
    console.log(sessionToken);
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
