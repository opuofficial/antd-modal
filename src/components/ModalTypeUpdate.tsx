import { Input } from "antd";
import { ModalProps } from "../types/modal";
import CustomModal from "./common/CustomModal";

export default function ModalTypeUpdate({
  open,
  data,
  handleClose,
}: ModalProps) {
  return (
    <CustomModal title="Update User" open={open} handleClose={handleClose}>
      <div>
        <label htmlFor="name">Name</label>
        <Input value={data.name} />
      </div>
    </CustomModal>
  );
}
