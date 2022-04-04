import React, { useState } from "react";
import Modal from "../components/UI/Modal/Modal";

const ModalPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState();

  const openModalHandler = (event) => {
    setOpenModal(true);
    setMessage({
      title: "Modal Title",
      message: "Lorem ipsum message",
    });
  };

  const closeModalHandler = (event) => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="m-3">
        <h3> React Portal Usage Example</h3>
      </div>
      <div className="modal-wrapper">
        {openModal && (
          <Modal
            title={message.title}
            message={message.message}
            onConfirm={closeModalHandler}
          />
        )}
        <button className="modal-button" onClick={openModalHandler}>
          Open Modal
        </button>
      </div>
    </>
  );
};

export default ModalPage;
