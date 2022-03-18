import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useConfirmBox from "../hooks/useConfirmBox";
import ListItem from '@mui/material/ListItem';

export default function ConfirmBox({ title, message }) {
    const [open, handleClickOpen, handleClose] = useConfirmBox();
    const [itemClick, setItemClick] = React.useState()
   
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Englobar texto clicável aqui
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ListItem autoFocus button onClick={() => setItemClick('true')}>
                        <Button
                            onClick={handleClose}>
                            Sim
                        </Button>
                    </ListItem>
                    <ListItem autoFocus button onClick={() => setItemClick('false')}>
                        <Button
                            onClick={handleClose}
                            autoFocus>
                            Não
                        </Button>
                    </ListItem>
                </DialogActions>
            </Dialog>
        </div >
    );
}
