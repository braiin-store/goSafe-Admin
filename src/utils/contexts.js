import React from "react";

export const SuscriptionContext = React.createContext({
	selectedConductor:null,
	setSelectedConductor:()=>{},
	selectedSuscription:null,
	setSelectedSuscription:()=>{},
	selectedFechaInicio:new Date(),
	setSelectedFechaInicio:()=>{},
});