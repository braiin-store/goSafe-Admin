/* eslint-disable jsx-a11y/alt-text */
import MaterialTable from "material-table";
import SwipeableViews from "react-swipeable-views";
import { useContext, useState } from "react";

import { ToggleButton } from "@material-ui/lab";
import {
	Button,
	ButtonGroup,
	Chip,
	Grid,
	Input,
	makeStyles,
	TextField,
	Typography,
} from "@material-ui/core";
import { Delete, Edit, Visibility } from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";
import ModalForm from "./modalForm";
import { useModal } from "../../hooks/useState";
import { URL, destroy } from "../../utils/formUtils";
import { options, tableIcons } from "../../utils/tableSettings";
import { SuscriptionTag } from "../../components/suscription/suscriptionTag";
import { ModalAlert } from "../../components/modalAlert";
import { useAlertModal } from "../../hooks/useAlertModal";
import SuscriptionListContainer from "../../components/suscription/suscriptionContainer";
import { SuscriptionContext } from "../../utils/contexts";
import { suscriptionAPI } from "../../api/suscription.api";
import moment from "moment";

const cols = [
	"id",
	"foto",
	"cedula",
	"nombre",
	"correo",
	"celular",
	"direccion",
	"suscripcion",
	"estado",
];

const StateButton = ({ id, estado }) => {
	const changeState = async () => {
		let button = document.getElementById(id);
		let span = button.children[0];

		estado = !estado;

		await fetch(`${URL}/conductores/${id}`, {
			method: "PUT",
			headers: {
				Accept: "Application/json",
				"Content-Type": "Application/json",
			},
			body: JSON.stringify({ estado }),
		});

		if (estado) {
			button.style.backgroundColor = "green";
			button.title = "Dar de Baja";
			span.innerHTML = "activo";
		} else {
			button.style.backgroundColor = "red";
			button.title = "Dar de Alta";
			span.innerHTML = "inactivo";
		}
	};
	return (
		<ToggleButton
			id={id}
			className="badge"
			value={`${estado}`}
			title={estado ? "Dar de Baja" : "Dar de Alta"}
			style={{ backgroundColor: `${estado ? "green" : "red"}` }}
			onClick={changeState}
		>
			{`${estado ? "activo" : "inactivo"}`}
		</ToggleButton>
	);
};

const columns = ({ openModal, reloadPage, openAlert, contextData }) => {
	const clickEmptySuscription = (conductor) => {
		openAlert();

		contextData.setSelectedConductor(conductor);
	};
	const handleClickEmpty = (id, nombre) => {
		clickEmptySuscription({ id, nombre });
		contextData.setSelectedSuscription(null);
		
	};
	let tmp = cols.map((col) => {
		let obj = { title: col, field: col };

		if (col === "foto") {
			obj.align = "left";
			obj.searchable = false;
			obj.render = ({ foto }) => (
				<img
					src={foto}
					height="45"
					loading="lazy"
					style={{ borderRadius: "40%" }}
				/>
			);
		}

		if (col === "estado") {
			obj.align = "center";
			obj.searchable = false;
			obj.render = ({ id, estado }) => (
				<StateButton id={id} estado={estado} />
			);
		}
		if (col === "suscripcion") {
			obj.align = "center";
			obj.searchable = false;
			obj.render = ({ id, nombre, DetalleSuscripcions }) => (
				<SuscriptionTag
					id={id}
					data={DetalleSuscripcions}
					onClickEmpty={() => handleClickEmpty(id, nombre)}
				/>
			);
		}
		return obj;
	});

	tmp.push({
		title: "Acción",
		align: "center",
		render: (row) => (
			<ButtonGroup variant="outlined" size="large">
				<Button
					title="Ver Detalle"
					style={{ color: "#1876D2" }}
					onClick={() => alert(JSON.stringify(row))}
					children={[<Visibility fontSize="small" />]}
				/>
				<Button
					title="Editar"
					color="primary"
					onClick={() => openModal(row)}
					children={[<Edit fontSize="small" />]}
				/>
				<Button
					title="Eliminar"
					style={{ color: "#F44336" }}
					onClick={async () => {
						await destroy(`${URL}/conductores/${row.id}`, {
							reloadPage,
							public_id: row.public_id,
						});
					}}
					children={[<Delete fontSize="small" />]}
				/>
			</ButtonGroup>
		),
	});

	return tmp;
};

const DataTable = ({ rows, reloadPage }) => {
	const { isOpen, openAlert, closeAlert } = useAlertModal();
	const [model, setModel] = useState({});
	const { open, openModal, closeModal } = useModal();
	const contextData = useContext(SuscriptionContext);
	const [selectedDate, handleDateChange] = useState(new Date());
	const handleClickSuscriptionSave = async () => {
		const data = {
			conductorId: contextData.selectedConductor.id,
			suscripcion: {
				id: contextData.selectedSuscription.id,
				fechaInicio: moment(selectedDate).format("DD/MM/YYYY"),
			},
		};
		// console.log( data);
		await suscriptionAPI.subscribeDriver(data);
		contextData.resetSuscriptionState();
		closeAlert();
		reloadPage();
	};
	const handleModal = (row) => {
		setModel(row);
		openModal();
	};
	const useStyles = makeStyles({
		dialogPaper: {
			minHeight: "20vh",
			maxHeight: "90vh",
		},
		dialogPaperMin: {
			minHeight: "20vh",
			maxHeight: "60vh",
		},
	});
	const classes = useStyles();
	return (
		<>
			<MaterialTable
				title="Conductores"
				style={{ paddingLeft: 10, paddingRight: 10 }}
				columns={columns({
					openModal: handleModal,
					reloadPage,
					openAlert,
					contextData,
				})}
				data={rows}
				options={options}
				icons={tableIcons}
			/>
			<ModalForm
				open={open}
				model={model}
				closeModal={closeModal}
				reloadPage={reloadPage}
			/>
			<ModalAlert
				open={isOpen}
				handleOpen={openAlert}
				handleClose={closeAlert}
				title="Suscripciones"
				handleClickSave={() => {}}
				onClickCancel={() => {
					contextData.setSelectedSuscription(null);
				}}
				classes={{ paper: classes.dialogPaper }}
				btnCancel
			>
				<SwipeableViews
					disabled
					index={contextData.selectedSuscription == null ? 0 : 1}
					animateHeight
				>
					<SuscriptionListContainer
						style={{
							maxHeight: 150,
							minHeight: 500,
							overflowY: "auto",
						}}
					></SuscriptionListContainer>
					<Grid
						direction="column"
						style={{
							maxHeight: 150,
							minHeight: 250,
							overflowY: "auto",
							minWidth: 100,
						}}
						container
						justify={"center"}
						alignItems={"center"}
					>
						{"Conductor: "}
						<Chip
							label={contextData.selectedConductor?.nombre}
							color="primary"
						></Chip>

						<br />
						{"Suscripcion elegida: "}
						<Chip
							label={contextData.selectedSuscription?.tipo}
							color="primary"
						></Chip>

						<br />

						<DatePicker
							inputVariant="outlined"
							autoOk
							label="Fecha de Inicio"
							clearable
							clearLabel="Limpiar"
							disablePast
							format="dd/MM/yyyy"
							value={selectedDate}
							onChange={handleDateChange}
						/>

						<Button
							onClick={handleClickSuscriptionSave}
							variant="contained"
							color="primary"
						>
							{"Guardar"}
						</Button>
					</Grid>
				</SwipeableViews>
			</ModalAlert>
		</>
	);
};

export default DataTable;
