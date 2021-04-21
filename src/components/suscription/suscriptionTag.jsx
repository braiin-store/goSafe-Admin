import { ToggleButton } from "@material-ui/lab";
import React from "react";

export const SuscriptionTag = ({ id,data, onClickEmpty, onClickSub }) => {
	
	if (data.length==0) {
		
		return (
			<ToggleButton
				id={id+'-btn-sus'}
				className="badge"
				title='No esta suscrito a ningun plan'
				style={{ backgroundColor:"gray" }}
				onClick={onClickEmpty}
				
			>
				Ninguna
			</ToggleButton>
		);
	} else {
		return <div></div>;
	}
};
