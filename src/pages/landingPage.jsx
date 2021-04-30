import { Button, Grid, TextField, MenuItem } from "@material-ui/core";
import React from "react";
import backgroundURL from "../assets/images/pexels-alex-powell-2433095.jpg";
import landingPageCSS from "./landingPage.module.css";
const currencies = [
	{
		value: "USD",
		label: "$",
	},
	{
		value: "EUR",
		label: "€",
	},
	{
		value: "BTC",
		label: "฿",
	},
	{
		value: "JPY",
		label: "¥",
	},
];

export const LandingPage = () => {
	const [currency, setCurrency] = React.useState("EUR");

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};
	return (
		<div style={{}}>
			<div
				style={{
					backgroundImage: `url(${backgroundURL})`,
					backgroundSize: "cover",
				}}
			>
				<div className={landingPageCSS.appBarFlexContainer}>
					{/* <Grid container className={landingPageCSS.appBarColor}>
						<Button style={{ backgroundColor: "white", margin: "1vh" }}>
							{" "}
							Registrate Ahora
						</Button>
					</Grid> */}
					<Button
						style={{
							position: "relative",
							backgroundColor: "white",
							margin: "1vh",
							zIndex: 1,
						}}
					>
						{" "}
						Registrate Ahora
					</Button>
				</div>
				<Grid
					container
					alignItems="flex-end"
					justify="center"
					style={{ height: "400px" }}
				>
					<Grid item>
						<Grid container>
							<label className={landingPageCSS.mainTitleFirst}>
								Sumate al
							</label>
						</Grid>
						<Grid container>
							<label className={landingPageCSS.mainTitleSecond}>
								{" "}
								equipo!
							</label>
						</Grid>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item>
						<TextField
							id="filled-select-currency"
							select
							label="Select"
							value={currency}
							onChange={handleChange}
							helperText="Ciudad"
							variant="filled"
						>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item>
						<TextField
							id="filled-select-currency"
							select
							label="Select"
							value={currency}
							onChange={handleChange}
							helperText="Ciudad"
							variant="filled"
						>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
