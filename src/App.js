import './app.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Home from './pages/homePage'
import Detail from './pages/cliente/detail'
import ClientePage from './pages/clientePage'
import ConductorPage from './pages/conductorPage'

import Dashboard from './components/dashboard/dashboard'
import AuthRoute from './components/AuthRoute'
import LoginPage from './pages/loginPage'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#80AF08',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7DAE0E',
    },
  },
})



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <AuthRoute path="/" exact>
            <Redirect to="/home" />
          </AuthRoute>
          <AuthRoute path="/home">
            <Dashboard child={<Home/>} />
          </AuthRoute>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <AuthRoute path="/clientes">
            <Dashboard child={<ClientePage />} />
          </AuthRoute>
            <AuthRoute path="/clientes/:id">
             <Dashboard child={<Detail/>} />
            </AuthRoute>
          <AuthRoute path="/conductores">
             <Dashboard child={<ConductorPage />} />
          </AuthRoute>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;