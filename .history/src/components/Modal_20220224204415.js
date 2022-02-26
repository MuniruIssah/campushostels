import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
const Modal = ({ visible, setVisible, children, title }) => {
  const [open, setOpen] = useState(visible);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-screen h-screen bg-white z-50 fixed top-0">
      <div className="py-6 flex justify-between">
        <span className="">{title}</span>
        <GrClose />
      </div>
      <div className="">{chidren}</div>
    </div>
  );
};

export default Modal;
