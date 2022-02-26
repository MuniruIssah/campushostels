import React ,{useState} from "react";

const Modal = ({visible,setVisible,children}) => {
  const [visible, setVisible] = useState(visible);
  return <div>Modal</div>;
};

export default Modal;
