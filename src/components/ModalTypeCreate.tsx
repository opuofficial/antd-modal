import { Input } from "antd";
import { ModalProps } from "../types/modal";
import CustomModal from "./common/CustomModal";

export default function ModalTypeCreate({ open, handleClose }: ModalProps) {
  return (
    <CustomModal title="Create User" open={open} handleClose={handleClose}>
      <div>
        <label htmlFor="name">Name</label>
        <Input />
      </div>
    </CustomModal>
  );
}
