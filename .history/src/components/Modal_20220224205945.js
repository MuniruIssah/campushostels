import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
const Modal = ({ visible, setVisible, children, title }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    console.log({ open });
  }, [open]);
  return (
    <>
      {
        open?
        
      }
     
    </>
  );
};

export default Modal;
