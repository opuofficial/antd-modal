# React Custom Modal Hook

## Overview

This project provides a reusable React custom hook (`useModal`) along with a `CustomModal` component to handle modal operations efficiently. The setup allows you to open different types of modals (Create, Read, Update, Delete) with ease.

## Features

- Custom hook for managing modal state (`useModal`)
- Generic modal component (`CustomModal`)
- Uses Ant Design (`antd`) for UI components
- Supports dynamic data passing

## Installation

Ensure you have Node.js installed, then install dependencies:

```sh
npm install
```

If you haven't installed `antd`, install it:

```sh
npm install antd
```

## Usage

### `useModal` Hook

```tsx
import { useState } from "react";

export function useModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [data, setData] = useState<unknown>(null);

  const handleOpen = (type: string, data?: any) => {
    setOpen(true);
    setModalType(type);
    setData(data || null);
  };

  const handleClose = () => {
    setOpen(false);
    setModalType("");
    setData(null);
  };

  return { open, modalType, data, handleOpen, handleClose };
}
```

### `CustomModal` Component

```tsx
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
```

### Example Implementation in `App.tsx`

```tsx
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
```

## Modal Components

Each modal type is implemented separately and uses `CustomModal` as a wrapper.

### Example: `ModalTypeRead.tsx`

```tsx
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
```

## Contributing

Feel free to fork this repository and submit pull requests if you want to improve this project.

## License

This project is licensed under the MIT License.
