import { ModalProps } from "../types/modal";
import CustomModal from "./common/CustomModal";

export default function ModalTypeRead({ open, data, handleClose }: ModalProps) {
  return (
    <CustomModal title="User Data" open={open} handleClose={handleClose}>
      <div>
        <div>Id: {data.id}</div>
        <div>Name: {data.name}</div>
      </div>
    </CustomModal>
  );
}
