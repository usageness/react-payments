import { useState } from "react";
import { modalName as modalNameType } from "types/modalName.type";

export const useModal = () => {
  const [modalVisibleState, setModalVisible] = useState(false);
  const [modalName, setModalName] = useState("");

  const setModalState = (state: boolean, name: modalNameType = "") => {
    setModalVisible(state);

    name && setModalName(name);
  };

  return { modalVisibleState, setModalState, modalName };
};
