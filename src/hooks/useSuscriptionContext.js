import { useState } from "react";

export const useSuscriptionState = () => {
	const [selectedSuscription, setSelectedSuscription] = useState(null);
	const [selectedFechaInicio, setSelectedFechaInicio] = useState(new Date());
	const [selectedConductor, setSelectedConductor] = useState(null);
	const resetSuscriptionState = () => {
		setSelectedSuscription(null);
		setSelectedFechaInicio(new Date());
		setSelectedConductor(null);
	};

	return {
		selectedSuscription,
		setSelectedSuscription,
		selectedFechaInicio,
		setSelectedFechaInicio,
		selectedConductor,
		setSelectedConductor,
		resetSuscriptionState,
	};
};
