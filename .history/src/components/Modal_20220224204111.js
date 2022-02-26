import React ,{useState} from "react";
import {} from 'react-icons'
const Modal = ({visible,onClose,children,title}) => {
  const [open, setOpen] = useState(visible);
  const handleClose=()=>setOpen(false);
  return (
    <div className="w-screen h-screen ">
      <div className="py-6 flex justify-between">
        <span className="">{title}</span>

      </div>
    </div>
  );
};

export default Modal;
