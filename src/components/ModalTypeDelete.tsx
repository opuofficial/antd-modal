import { ModalProps } from "../types/modal";
import CustomModal from "./common/CustomModal";

export default function ModalTypeDelete({ open, handleClose }: ModalProps) {
  return (
    <CustomModal
      title="Are you sure?"
      open={open}
      handleClose={handleClose}
    ></CustomModal>
  );
}
