import { useEffect, useState } from "react";

const useConfirmBox = (confirm) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        if (confirm) {
            setOpen(true);
        }
    }, [confirm]);

    return [open, handleClickOpen, handleClose]
};
export default useConfirmBox;