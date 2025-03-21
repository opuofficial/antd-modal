import { Button } from "antd";
import "./App.css";
import { useModal } from "./hooks/useModal";
import ModalTypeCreate from "./components/ModalTypeCreate";
import ModalTypeRead from "./components/ModalTypeRead";
import ModalTypeUpdate from "./components/ModalTypeUpdate";
import ModalTypeDelete from "./components/ModalTypeDelete";

function App() {
  const { open, modalType, data, handleOpen, handleClose } = useModal();

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex gap-2">
        <Button onClick={() => handleOpen("CREATE")}>Create</Button>
        <Button onClick={() => handleOpen("READ", { id: 1, name: "Opu" })}>
          Read
        </Button>
        <Button onClick={() => handleOpen("UPDATE", { id: 1, name: "Opu" })}>
          Update
        </Button>
        <Button onClick={() => handleOpen("DELETE")}>Delete</Button>
      </div>
      {modalType === "CREATE" && (
        <ModalTypeCreate open={open} handleClose={handleClose} />
      )}

      {modalType === "READ" && (
        <ModalTypeRead open={open} data={data} handleClose={handleClose} />
      )}

      {modalType === "UPDATE" && (
        <ModalTypeUpdate open={open} data={data} handleClose={handleClose} />
      )}

      {modalType === "DELETE" && (
        <ModalTypeDelete open={open} handleClose={handleClose} />
      )}
    </section>
  );
}

export default App;
