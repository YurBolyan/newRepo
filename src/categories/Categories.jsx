import React, { useState, useEffect } from "react";
import useCategories from "./customHook/useCategories";
import ReactModal from "./reactModal/ReactModal";
import "./styles/categories.css";
import ModalCategory from "./reactModal/ModalCategory";
import SvgFemale from "../svg/SvgFemale";
import SvgMale from "../svg/SvgMale";
import ModalProducts from "../categories/reactModal/ModalProducts";

function Categories() {
  const [activeZard, setActiveZard] = useState();
  const [activeType, setActiveType] = useState();
  const [zarder, setZarder] = useState([]);
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
    activeGender,
    setActiveGender,
    setHumansGender,
    addNewType,
    setName1,
    humansGender,
  } = useCategories(activeZard);

  useEffect(() => {
    setActiveZard(undefined);
    const result = data[activeGender];
    setZarder(result);
  }, [activeGender, data]);

  useEffect(() => {
    setActiveType(undefined);
    if (activeZard) {
      const result = zarder.find((zard) => zard.id === activeZard).types;
      setTypes(result);
    }
  }, [activeZard, zarder]);

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
              <div onClick={() => setActiveGender("male")}>
                <p style={{background: activeGender === "male"? "#939393" : "white" }}>Router</p>
              </div>
            </div>
            <div>
              <div
                onClick={() => setActiveGender("female")}
              >
                <p style={{background: activeGender === "male"? "white" : "#939393" }}>Switch</p>
              </div>
            </div>
          </div>
        </div>
        {zarder.map((zard) => (
          <div
            className={`femaleItems ${
              activeZard === zard.id ? "activeZard" : ""
            }`}
            key={zard.id}
            onClick={() => setActiveZard(zard.id)}
          >
            <img alt="" width="137px" height="60px" src={zard.pichtures} />
            <p>{zard.name}</p>
          </div>
        ))}
        <button className="activeZardButton" onClick={openModal}>
          +
        </button>
      </div>
      {activeZard && (
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

      {activeZard && activeType && (
        <div className="products">
          {items.map((item) => {
            return (
              <div>
                <div style={{cursor: "pointer"}} className="productImage">
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
        activeGender={activeGender}
        activeZard={activeZard}
        activeType={activeType}
      />
      <ModalCategory
        modalIsOpen1={modalIsOpen1}
        closeModal1={closeModal1}
        addNewType={addNewType}
        setName1={setName1}
        zardObj={zarder?.find((zard) => zard.id === activeZard)}
      />
      <div>
        <ReactModal
          modalIsOpen={modalIsOpen}
          setName={setName}
          handleUploadFile={handleUploadFile}
          addNewCategory={addNewCategory}
          closeModal={closeModal}
          image={image}
          setHumansGender={setHumansGender}
          humansGender={humansGender}
        />
      </div>
    </div>
  );
}

export default Categories;
