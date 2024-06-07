import React from "react";

//* styled-compoents components imports...
import { ModalContent, Overlay } from "./styles";

interface ModalProps {
  children: any,
  open: boolean,
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <Overlay>
      <ModalContent>
        <button onClick={onClose}>Close</button>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;