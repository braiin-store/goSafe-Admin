import "./app.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "./pages/homePage";
import Detail from "./pages/cliente/detail";
import ClientePage from "./pages/clientePage";
import ConductorPage from "./pages/conductorPage";

import Dashboard from "./components/dashboard/dashboard";
import AuthRoute from "./components/AuthRoute";
import LoginPage from "./pages/loginPage";
import { useSuscriptionState } from "./hooks/useSuscriptionContext";
import { SuscriptionContext } from "./utils/contexts";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { LandingPage } from "./pages/landingPage";

const theme = createMuiTheme({
	palette: {
		type: "light",
		primary: {
			main: "#80AF08",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#7DAE0E",
		},
	},
});

const App = () => {
	const suscriptionContextData = useSuscriptionState();
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Switch>
						<Route path="/welcome">
							<LandingPage />
						</Route>
						<Route path="/home">
							<Dashboard child={<Home />} />
						</Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<AuthRoute path="/clientes">
							<Dashboard child={<ClientePage />} />
						</AuthRoute>
						<AuthRoute path="/clientes/:id">
							<Dashboard child={<Detail />} />
						</AuthRoute>
						<SuscriptionContext.Provider value={suscriptionContextData}>
							<AuthRoute path="/conductores">
								<Dashboard child={<ConductorPage />} />
							</AuthRoute>
						</SuscriptionContext.Provider>
						<Route path="/">
							<Redirect to="/welcome" />
						</Route>
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default App;
