import { cx } from "@emotion/css";
import { Dialog } from "@mui/material";
import { styles } from "./ModalStyles";
import React from "react";
import { Close } from "@mui/icons-material";

interface Props {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
const Modal = ({ open, children, onClose }: Props) => {
  return (
    <Dialog open={open}>
      <div className={cx(styles.modalContainer)}>
        <div className={cx(styles.headerModal)}>
          <h3 style={{ margin: 0 }}>New expense</h3>
          <Close onClick={onClose} />
        </div>
        <div className={cx(styles.modalContent)}>{children}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
