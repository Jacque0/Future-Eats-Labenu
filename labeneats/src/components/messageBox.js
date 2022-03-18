import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import useMessageBox from "../hooks/useMessageBox";

export default function MessageBox({severity, title, message}) {
  const [open, handleClose] = useMessageBox(severity);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={15000}
      onClose={handleClose}
    >
      <Alert sx={{ width: "100%" }} severity={severity} onClose={handleClose}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}
