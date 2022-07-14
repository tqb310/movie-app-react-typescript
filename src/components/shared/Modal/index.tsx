import React, { ReactNode, useContext, createContext } from "react";
import {} from "@heroicons/react/solid";
interface ModalProps {
  children: ReactNode;
  open: boolean;
  handleClose?: () => void;
}

interface ModalTitleProps {
  children: ReactNode;
}

interface ModalContextValue {
  open: boolean;
  handleClose?: () => void;
}
const ModalContext = createContext<ModalContextValue | null>(null);

export const Modal = ({ children, open, handleClose }: ModalProps) => {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/60 z-[100] flex justify-center items-center ${
        open ? "visible" : "invisible"
      }`}
    >
      {/* <div className='bg-black/20'></div> */}
      <ModalContext.Provider value={{ open, handleClose }}>
        <div className='bg-black/90 rounded-md p-5 w-1/2'>{children}</div>
      </ModalContext.Provider>
    </div>
  );
};

export const ModalTitle = ({ children }: ModalTitleProps) => {
  const value = useContext(ModalContext);

  return (
    <div className=''>
      {children}{" "}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    </div>
  );
};

export const ModalContent = ({ children }: ModalTitleProps) => {
  return <div>{children}</div>;
};
