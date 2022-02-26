import React ,{useState} from "react";
import {GrClose} from 'react-icons/gr'
const Modal = ({visible,setVisible,children,title}) => {
  const [open, setOpen] = useState(visible);
  const handleClose=()=>setOpen(false);
  return (
    <div className="w-screen h-screen ">
      <div className="py-6 flex justify-between">
        <span className="">{title}</span>
        <GrClose/>
      </div>
      <div className="">
        {}
      </div>
    </div>
  );
};

export default Modal;
