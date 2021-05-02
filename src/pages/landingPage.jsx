import {
	Button,
	Grid,
	TextField,
	MenuItem,
	Select,
	Input,
	withStyles,
	InputBase,
	Typography,
	Paper,
	Box,
} from "@material-ui/core";
import React from "react";
import backgroundURL from "../assets/images/firstBackground.png";
import logoGoSafeByNURL from "../assets/images/logoGoSafeByN.png";
import roundedRectangleURL from "../assets/images/rounded_rectangle.png";
import background2URL from "../assets/images/secondBackground.png";
import tickURL from "../assets/images/tick.png";
import PersistentDrawerRight from "./drawerExample";
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
	{
		value: "null",
		label: "Seleccione ciudad",
	},
];
const requirementsList = [
	"Tener al menos 18 años y estar apto para trabajar",
	"Tener moto (SOAT al dia) o bicicleta",
	"Tener telefono iPhone 4s (o superior) o un telefono Android 4.2 o superior",
	"Flexibilidad para trabajar los fines de semana y feriados",
];
const BootstrapInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: "relative",
		backgroundColor: "white",
		floodColor: "white",
		textEmphasisColor: "white",
		textDecorationColor: "white",
		outlineColor: "white",
		border: "1px solid #ced4da",
		fontSize: 16,
		padding: "10px 26px 10px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:focus": {
			borderRadius: 4,
			borderColor: "#80bdff",
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
		},
	},
}))(InputBase);
export const LandingPage = () => {
	const [openDrawer, setOpenDrawer] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpenDrawer(true);
	};

	const handleDrawerClose = () => {
		setOpenDrawer(false);
	};
	const [currency, setCurrency] = React.useState("null");

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};
	return (
		<div className="container">
			<PersistentDrawerRight
				handleDrawerOpen={handleDrawerOpen}
				openDrawer={openDrawer}
				handleDrawerClose={handleDrawerClose}
			></PersistentDrawerRight>
			<Grid container className={landingPageCSS.firstBackground}>
				<Grid item sm={12}>
					<Grid className="row">
						<div className="md-col-12 center">
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
										margin: "10px",
										zIndex: 1,
									}}
									onClick={handleDrawerOpen}
								>
									{" "}
									Registrate Ahora
								</Button>
							</div>
						</div>
					</Grid>

					<Grid
						container
						alignItems="flex-end"
						justify="space-evenly"
						style={{ height: "800px" }}
					>
						<Grid
							item
							xs={11}
							sm={10}
							md={3}
							className={landingPageCSS.registerCard}
						>
							<Grid container justify="center">
								<Grid item xs={10} sm={11}>
									<Typography
										style={{
											fontFamily: "MADE_TOMMY_Medium",
											color: "white",
											fontSize: "40px",
											paddingTop: "40px",
										}}
									>
										{" "}
										Ingresa tu ciudad y tipo de vehiculo por favor.
									</Typography>
								</Grid>
							</Grid>
							<Grid container justify="center">
								<Grid item sm={11} xs={10} md={10}>
									<TextField
										style={{ width: "100%" }}
										InputProps={{
											style: {
												backgroundColor: "black",
												color: "white",
											},
										}}
										id="filled-select-currency"
										select
										label="Select"
										value={currency}
										onChange={handleChange}
										helperText="Ciudad"
										variant="filled"
									>
										{currencies.map((option) => (
											<MenuItem
												key={option.value}
												value={option.value}
											>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</Grid>
							</Grid>
							<Grid container justify="center">
								<Grid item sm={11} xs={10} md={10}>
									<TextField
										style={{ width: "100%" }}
										InputProps={{
											style: {
												backgroundColor: "black",
												color: "white",
											},
										}}
										id="filled-select-currency"
										select
										label="Select"
										value={currency}
										onChange={handleChange}
										helperText="Tipo de Vehiculo"
										variant="filled"
									>
										{currencies.map((option) => (
											<MenuItem
												key={option.value}
												value={option.value}
											>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</Grid>
							</Grid>
							<Button
								className={landingPageCSS.registerCardButton}
								style={{
									backgroundColor: "#537e14",
									fontFamily: "MADE_TOMMY_Medium",
									fontWeight: "bold",
									fontSize: "25px",
								}}
								onClick={handleDrawerOpen}
							>
								Registrate
							</Button>
						</Grid>

						<Grid item>
							<Grid container>
								<label className={landingPageCSS.mainTitleFirst}>
									Sumate al
								</label>
							</Grid>
							<Grid container>
								<label className={landingPageCSS.mainTitleSecond}>
									equipo!
								</label>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Box m={8} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<div
			// style={{
			// 	backgroundImage: `url(${backgroundURL})`,
			// 	backgroundSize: "cover",
			// 	backgroundPosition: "center",
			// 	height: "1081px",
			// }}
			>
				<div className={"row " + landingPageCSS.secondBackground}>
					<div className="col-12">
						<div className={"row " + landingPageCSS.mixBlendedGreen} />
						<div className={"row " + landingPageCSS.containerBarWhiteL}>
							<Grid item md={3}>
								<img
									style={{
										maxWidth: "100%",
										height: "auto",
									}}
									src={logoGoSafeByNURL}
									alt=""
								/>
							</Grid>
						</div>
						<Grid
							container
							alignContent="flex-end"
							className={landingPageCSS.gridMedium}
						>
							<Grid
								item
								style={{
									backgroundColor: "rgba(124, 166, 61, 50%)",
								}}
								md={7}
							>
								<Grid container justify="center">
									<Grid item sm={3}>
										<label></label>{" "}
									</Grid>
									<Grid item xs={9} md={8}>
										<label className={landingPageCSS.mediumPhrase}>
											Si Tienes un auto en buen estado y quieres
											ganar dinero extra
										</label>{" "}
										<Grid container justify="center">
											<Button
												style={{
													position: "relative",
													backgroundColor: "white",
													margin: "10px",
													zIndex: 1,
												}}
												onClick={handleDrawerOpen}
											>
												{" "}
												Registrate Ahora
											</Button>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</div>
					<div className="col-12"></div>

					{/* <div style={{ backgroundImage: `url(${roundedRectangleURL})` }}>
						<label>
							{
								"Si tienes un auto en buen estado y quieres ganar dinero extra"
							}
						</label>
					</div> */}
				</div>
				<Grid container style={{ textAlign: "center" }}>
					<Grid item xs={12}>
						<Box m={10} />
					</Grid>
					<Grid item xs={12}>
						<Grid container justify="center">
							<Grid item sm={1}>
								<h1 htmlFor="">Algunos requisitos</h1>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Box m={10} />
					</Grid>
					<Grid item xs={12}>
						<Grid container justify="center">
							<Grid item sm={10}>
								<Grid container justify="space-around">
									{requirementsList.map((item) => (
										<Grid item xs={9} sm={2}>
											<Grid container justify="center">
												<Grid item xs={4} md={4}>
													<img
														style={{
															maxWidth: "100%",
															height: "auto",
														}}
														src={tickURL}
														alt=""
													/>
												</Grid>
											</Grid>
											<Grid container justify="center">
												<Grid item xs={8} md={8}>
													<label htmlFor="">{item}</label>
												</Grid>
											</Grid>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Box m={10} />
					</Grid>
				</Grid>
				<Grid className={landingPageCSS.thirdBackground}>
					<div className={landingPageCSS.mixBlendedGreen} />
					<div className={landingPageCSS.containerBarWhiteR}>
						<Grid item md={3}>
							<img
								style={{
									maxWidth: "100%",
									height: "auto",
								}}
								src={logoGoSafeByNURL}
								alt=""
							/>
						</Grid>
					</div>
				</Grid>
			</div>
		</div>
	);
};
