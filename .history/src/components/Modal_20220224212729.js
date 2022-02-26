import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
const Modal = ({ visible = false, onClose, children, title = "Najinaram" }) => {
  const handleClose = () => onClose();
  useEffect(() => {
    console.log({ open });
  }, [open]);
  return (
    <div
      className="w-screen h-screen bg-white z-50 fixed top-0 left-0"
      style={{ visibility: visible ? "visible" : "collapse" }}
    >
      <div className="py-6 flex justify-between border-b border-gray-200 px-4 md:px-8">
        <span className="">{title}</span>
        <button
          onClick={handleClose}
          className="p-2 hover:border hover:border-gray-300 rounded rounded-lg"
        >
          <GrClose />
        </button>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Modal;
