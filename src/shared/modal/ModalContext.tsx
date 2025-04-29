import React, { createContext, useState, useContext } from "react";
import Modal from "./Modal";
type ModalType = "default" | "loading";
interface ModalContextType {
  isOpen: boolean;
  content: string;
  openModal: (content: string, type?: ModalType) => void;
  closeModal: () => void;
  type: ModalType;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [type, setType] = useState<ModalType>("default");

  const openModal = (content: string, type: ModalType = "default") => {
    setContent(content);
    setIsOpen(true);
    setType(type);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent("");
    setType("default");
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, content, openModal, type, closeModal }}
    >
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
