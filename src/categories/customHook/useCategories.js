import { useState } from "react";
import { gender } from "../../mock/mock";


function useCategories(activeZard) {
  const [activeGender, setActiveGender] = useState("female");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const [data, setData] = useState(gender);
  const [humansGender, setHumansGender] = useState(0);
  const [name1,setName1] = useState('')
  const [name, setName] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setImage()
    setIsOpen(false);
  }

  const handleUploadFile = (event) => {
    const file = event.target.files[0];
    const newImage = URL.createObjectURL(file);

    setImage(newImage);
  };

  const addNewCategory = () => {
    setData((prev) => {
      const temp = { ...prev };
    name && image && temp[humansGender ? "male" : "female"].push({
        pichtures: image,
        name,
        id:Math.random() * 100000,
        types: [],
      });
      return temp;
    });
    setName()
    setImage()
    closeModal();
  };

  const addNewType = () => {
    const prevData = data;
    const newData = {
      id:  Math.random() *100000,
      name: name1,
      items: []
    };
    prevData[activeGender].find(zard => zard.id === activeZard).types.push(newData);
    setData(prevData);
  };


  return {
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
    setName1,
    addNewType,
    name1,
    humansGender
  };
}

export default useCategories;