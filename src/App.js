import './app.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Home from './pages/homePage'
import Detail from './pages/cliente/detail'
import ClientePage from './pages/clientePage'
import ConductorPage from './pages/conductorPage'

import Dashboard from './components/dashboard/dashboard'

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
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Dashboard child={<Home/>} />
          </Route>
          <Route path="/clientes">
            <Dashboard child={<ClientePage />} />
          </Route>
            <Route path="/clientes/:id">
              <Dashboard child={<Detail/>} />
            </Route>
          <Route path="/conductores">
            <Dashboard child={<ConductorPage />} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;