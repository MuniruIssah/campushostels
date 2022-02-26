import React ,{useState} from "react";

const Modal = ({visible,setVisible,children}) => {
  const [visible, setVisible] = useState(visible);
  return (
    <div className="w-screen h-screen ">
      <div className="py-6 flex justify-between">
        
      </div>
    </div>
  );
};

export default Modal;
