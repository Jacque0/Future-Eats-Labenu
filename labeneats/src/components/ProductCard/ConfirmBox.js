import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useConfirmBox from "../../hooks/useConfirmBox";
import ListItem from '@mui/material/ListItem';

export default function ConfirmBox({ setDisplayQuantity, setCart }) {
    const [open, handleClose] = useConfirmBox(true);

    const isTrue = () =>{
        setDisplayQuantity(true)
        setCart([])
        localStorage.setItem('cart', JSON.stringify([]))
    }
   
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Ops!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Deseja trocar de restaurante? Seu carrinho será esvaziado.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ListItem autoFocus button onClick={isTrue}>
                        <Button
                            onClick={handleClose}>
                            Sim
                        </Button>
                    </ListItem>
                    <ListItem autoFocus button >
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
