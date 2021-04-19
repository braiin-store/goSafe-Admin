import React from 'react'
import { Route } from 'react-router-dom'

export default function AuthRoute({path,children}) {
    return (
        <Route path={path} >
            {children}
        </Route>
    )
}
