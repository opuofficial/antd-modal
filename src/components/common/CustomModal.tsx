import { Modal } from "antd";
import { ReactNode } from "react";

interface CustomModalProps {
  children?: ReactNode;
  title?: string;
  open: boolean;
  handleClose: () => void;
}

export default function CustomModal({
  children,
  title,
  open,
  handleClose,
}: CustomModalProps) {
  return (
    <Modal title={title || ""} open={open} onCancel={handleClose} footer={null}>
      {children}
    </Modal>
  );
}
