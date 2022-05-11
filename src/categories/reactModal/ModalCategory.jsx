import React from "react";
import Modal from "react-modal";
import modalgic from "../../pichtures/modalgic.svg";
import "../reactModal/reactModal.css";

function ModalCategory({
  setName1,
  closeModal1,
  modalIsOpen1,
  addNewType,
  zardObj,
}) {
  const customStyles = {
    content: {
      width: "345px",
      height: "163px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleAddCategory = () => {
    addNewType();
    closeModal1();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div>
          <div className="categoryModalName">
            {zardObj?.name}: Добавить цвет {" "}
            <button style={{ marginLeft: "60px"}} onClick={closeModal1}>
              X
            </button>
          </div>
          <input
            style={{ marginTop: "23px", border: "0px", width: "255px" }}
            placeholder="цвет"
            type="text"
            onChange={(e) => setName1(e.target.value)}
          />
          <img src={modalgic} alt="" />
          <div>
            <button
              style={{ margin: "33px 23px" }}
              className="zardAddButton"
              onClick={handleAddCategory}
            >
              Добавить
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalCategory;
