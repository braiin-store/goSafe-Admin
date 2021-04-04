import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Dashboard from './components/dashboard/dashboard'

import ClientePage from './pages/clientePage'
import ConductorPage from './pages/conductorPage'

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
            <Dashboard child={<h1>homePage Works!!</h1>} />
          </Route>
          <Route path="/clientes">
            <Dashboard child={<ClientePage />} />
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