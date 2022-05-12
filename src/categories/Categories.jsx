import React, { useState, useEffect } from "react";
import useCategories from "./customHook/useCategories";
import ReactModal from "./reactModal/ReactModal";
import "./styles/categories.css";
import ModalCategory from "./reactModal/ModalCategory";
import ModalProducts from "../categories/reactModal/ModalProducts";

function Categories() {
  const [activeProduct, setActiveProduct] = useState();
  const [activeType, setActiveType] = useState();
  const [device, setDevice] = useState([]);
  const [types, setTypes] = useState([]);
  const [items, setItems] = useState([]);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [productModalOpen, setProductModalOpen] = useState(false);


  function openModal1() {
    setIsOpen1(true);
  }
  function closeModal1() {
    setIsOpen1(false);
  }
  function openModalProducts() {
    setProductModalOpen(true);
  }
  function closeModalProducts() {
    setProductModalOpen(false);
  }
  const {
    modalIsOpen,
    setName,
    handleUploadFile,
    addNewCategory,
    openModal,
    data,
    closeModal,
    image,
    activeSarq,
    setActiveSarq,
    setModalDevice,
    addNewType,
    setName1,
    modalDevice,
  } = useCategories(activeProduct);

  useEffect(() => {
    setActiveProduct(undefined);
    const result = data[activeSarq];
    setDevice(result);
  }, [activeSarq, data]);

  useEffect(() => {
    setActiveType(undefined);
    if (activeProduct) {
      const result = device.find((sarq) => sarq.id === activeProduct).types;
      setTypes(result);
    }
  }, [activeProduct, device]);

  useEffect(() => {
    if (activeType) {
      const result = types.find((type) => type.id === activeType).items;
      setItems(result);
    }
  }, [activeType, types]);
  
  return (
    <div>
      <div className="wrappercategory">
        <div>
          <div className="svgIcons">
            <div>
              <div onClick={() => setActiveSarq("male")}>
                <p style={{background: activeSarq === "male"? "blue" : "#939393", borderRadius: "6px" }}>Router</p>
              </div>
            </div>
            <div>
              <div
                onClick={() => setActiveSarq("female")}
              >
                <p style={{background: activeSarq === "male"? "#939393" : "blue", borderRadius: "6px" }}>Switch</p>
              </div>
            </div>
          </div>
        </div>
        {device.map((sarq) => (
          <div
            className={`femaleItems ${
              activeProduct === sarq.id ? "activeZard" : ""
            }`}
            key={sarq.id}
            onClick={() => setActiveProduct(sarq.id)}
          >
            <img alt="" width="137px" height="60px" src={sarq.pichtures} />
            <p>{sarq.name}</p>
          </div>
        ))}
        <button className="activeZardButton" onClick={openModal}>
          +
        </button>
      </div>
      {activeProduct && (
        <div className="zardCategory">
          {types.map((type) => (
            <div
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={`typeItems ${
                activeType === type.id ? "activeType" : ""
              }`}
            >
              {type.name}
            </div>
          ))}
          <button className="avtiveTypesButton" onClick={openModal1}>
            +
          </button>
        </div>
      )}

      {activeProduct && activeType && (
        <div className="products">
          {items.map((item) => {
            return (
              <div>
                <div className="productImage">
                  <img alt="" src={item.pichtures} />
                  <div >
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <button className="addProductButton" onClick={openModalProducts}>+</button>
          </div>
        </div>
      )}

      <ModalProducts
        productModalOpen={productModalOpen}
        closeModalProducts={closeModalProducts}
        data={data}
        activeSarq={activeSarq}
        activeProduct={activeProduct}
        activeType={activeType}
      />
      <ModalCategory
        modalIsOpen1={modalIsOpen1}
        closeModal1={closeModal1}
        addNewType={addNewType}
        setName1={setName1}
        deviceObj={device?.find((sarq) => sarq.id === activeProduct)}
      />
      <div>
        <ReactModal
          modalIsOpen={modalIsOpen}
          setName={setName}
          handleUploadFile={handleUploadFile}
          addNewCategory={addNewCategory}
          closeModal={closeModal}
          image={image}
          setModalDevice={setModalDevice}
          modalDevice={modalDevice}
        />
      </div>
    </div>
  );
}

export default Categories;
