import React ,{useState} from "react";

const Modal = ({visible,setVisible,children,title}) => {
  const [visible, setVisible] = useState(visible);
  const handleClose=()=>setVisible(false);
  return (
    <div className="w-screen h-screen ">
      <div className="py-6 flex justify-between">
        <span className="">{title}</span>
      </div>
    </div>
  );
};

export default Modal;
