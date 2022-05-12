import React from "react";
import Modal from "react-modal";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import modalgic from "../../pichtures/modalgic.svg";
import "./reactModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    height: "450px",
    width: "301px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


function ReactModal({
  modalIsOpen,
  closeModal,
  setName,
  handleUploadFile,
  addNewCategory,
  image,
  setModalDevice,
  modalDevice,
}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button onClick={closeModal}>X</button>
        <h2>Добавить устройство</h2>
        <div className="gendersInModal">
          <div style={{paddingRight: "15px"}} onClick={() => setModalDevice(1)}>
          <p style={{background: modalDevice === 1? "blue" : "#939393",marginTop: "26px",borderRadius: "6px" }}>Router</p>
          </div>
          <div style={{paddingTop: "10px"}} onClick={() => setModalDevice(0)}>
          <p style={{background: modalDevice === 1? "#939393" : "blue",borderRadius: "6px" }}>Switch</p>
          </div>
        </div>
        <div>
          <input
            style={{ border: "0px" }}
            type="name"
            placeholder="устройство"
            onChange={(e) => setName(e.target.value)}
          />
          <img src={modalgic} alt="" />
        </div>
        <img style={{ paddingLeft: "49px" }}alt="" width="180px"  src={image} />

        <div>
          <label htmlFor="InputTag">
            <div style={{ paddingLeft: "82px", cursor: "pointer" }}>
              <div style={{ paddingLeft: "40px" }}>
                <MdOutlinePhotoCameraBack size={30} />
              </div>
              <input
                style={{ display: "none" }}
                id="InputTag"
                type="file"
                onChange={(event) => handleUploadFile(event)}
              />
              Загрузить фото
            </div>
          </label>
        </div>
        <button className="zardAddButton" onClick={addNewCategory}>
          Добавить
        </button>
      </Modal>
    </div>
  );
}

export default ReactModal;
