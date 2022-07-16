import React, {
  ReactNode,
  useContext,
  createContext,
  useEffect,
  memo,
} from "react";
import { XIcon } from "@heroicons/react/solid";
interface ModalProps extends React.ComponentProps<"div"> {
  open: boolean;
  handleClose: () => void;
}

interface ModalContextValue {
  open: boolean;
  handleClose: () => void;
}
const ModalContext = createContext<ModalContextValue | null>(null);

export const Modal = memo(
  ({ children, open, handleClose, className, ...rest }: ModalProps) => {
    useEffect(() => {
      const onCloseOutsideModal = () => {
        handleClose();
      };
      window.addEventListener("click", onCloseOutsideModal);
      return () => {
        window.removeEventListener("click", onCloseOutsideModal);
      };
    }, []);
    return (
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 bg-black/60 z-[100] flex justify-center items-center ${
          open ? "visible" : "invisible"
        }`}
        {...rest}
      >
        <ModalContext.Provider value={{ open, handleClose }}>
          <div
            className={
              "bg-black/90 rounded-md px-5 py-3 w-full max-w-screen-lg scaleUp-begin duration-200 " +
              (open ? "scaleUp-end " : "") +
              className
            }
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {children}
          </div>
        </ModalContext.Provider>
      </div>
    );
  }
);

export const ModalTitle = memo(
  ({ children, className, ...rest }: React.ComponentProps<"div">) => {
    const value = useContext(ModalContext);

    return (
      <div className={"flex justify-between items-center " + className}>
        <div>{children}</div>
        <XIcon
          className='h-5 w-5 text-red-600'
          onClick={value?.handleClose || ((_: any) => {})}
        />
      </div>
    );
  }
);

export const ModalContent = memo(
  ({ children, className, ...rest }: React.ComponentProps<"div">) => {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }
);
