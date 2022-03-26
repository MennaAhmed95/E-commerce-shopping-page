import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modal}>
        <button className={classes.btn} onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default Modal;
