import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/dashboard'

import ClientePage from './pages/cliente'
import ConductorPage from './pages/conductor'

const app = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/clientes">
          <Dashboard child={<ClientePage />} />
        </Route>
        <Route path="/conductores">
          <Dashboard child={<ConductorPage />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default app;