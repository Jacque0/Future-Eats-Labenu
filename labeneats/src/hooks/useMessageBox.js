import { useEffect, useState } from "react";

const useMessageBox = (severity) => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (severity) {
      setOpen(true);
    }
  }, [severity]);

  return [open, handleClose]
};
export default useMessageBox;