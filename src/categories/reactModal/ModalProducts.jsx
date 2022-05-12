import React, { useState } from "react";
import Modal from "react-modal";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import modalgic from "../../pichtures/modalgic.svg";
import "../reactModal/reactModal.css";

function ModalProducts({
  closeModalProducts,
  productModalOpen,
  activeSarq,
  activeType,
  activeProduct,
  data,
}) {
  const [photoProductModal, setPhotoProductModal] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  const customStyles = {
    content: {
      width: "279px",
      height: "410px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleUploadFile = (event) => {
    const file = event.target.files[0];
    const newImage = URL.createObjectURL(file);

    setPhotoProductModal(newImage);
  };

  const handleCloseModal = () => {
    setPhotoProductModal();
    setName();
    closeModalProducts();
  };

  const addNewProduct = () => {
    const prevData = data;
    const newProduct = {
      name: name,
      price: `${price}$`,
      pichtures: photoProductModal,
    };
    name &&
      price &&
      photoProductModal &&
      prevData[activeSarq]
        .find((sarq) => sarq.id === activeProduct)
        .types.find((type) => type.id === activeType)
        .items.push(newProduct);
    setPhotoProductModal("");
    handleCloseModal();
  };

  return (
    <div>
      <Modal
        isOpen={productModalOpen}
        onRequestClose={closeModalProducts}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div>
          <button style={{ marginLeft: "240px" }} onClick={closeModalProducts}>
            X
          </button>
          <h2>Добавить устройство</h2>
          <div>
            <input
              style={{ border: "0px" }}
              type="name"
              placeholder="имя"
              onChange={(e) => setName(e.target.value)}
            />
            <img src={modalgic} alt="" />
            <div>
              <input
                style={{ border: "0px" }}
                placeholder="цена"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <img src={modalgic} alt="" />
          </div>
          <img
            style={{ paddingLeft: "49px" }}
            alt=""
            width="180px"
            src={photoProductModal}
          />
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
        </div>
        <button
          className="zardAddButton"
          style={{ marginTop: "15px" }}
          onClick={addNewProduct}
        >
          Добавить
        </button>
      </Modal>
    </div>
  );
}

export default ModalProducts;
