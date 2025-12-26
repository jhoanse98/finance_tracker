import { Dialog } from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  children?: React.ReactNode;
}
const Modal = ({ open, children }: Props) => {
  return <Dialog open={open}>{children}</Dialog>;
};

export default Modal;
