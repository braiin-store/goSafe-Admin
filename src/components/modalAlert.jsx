import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
export const ModalAlert = ({
  classes,
	open,
	handleOpen,
	handleClose=()=>{},
	children,
	title,
	handleClickSave,
	onClickCancel,
	btnSave,
	btnCancel
}) => {
	return (
		<Dialog
    // style={style}
      classes={classes}
			maxWidth={"xl"}
			open={open}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				{btnCancel?<Button
					onClick={() => {
						handleClose();
						setTimeout(() => {
							onClickCancel()
						}, 600)
					}}
					color="primary"
				>
					Cancel
				</Button>:null}
				{btnSave?<Button onClick={handleClickSave} color="primary">
					Guardar
				</Button>:null}
			</DialogActions>
		</Dialog>
	);
};
