// Masonry component
import React, { useState } from 'react';
import '../../styles/gui-styles/masonry.scss';
import Model from './Model'; // Update the path to your Modal component
import classes from "../../styles/gui-styles/Model.module.css";
import { FiChevronRight, FiChevronLeft, FiXCircle } from "react-icons/fi";

function Masonry(props) {
  const { galleryImages } = props;
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  function openModal(index) {
    setSelectedImageIndex(index);
  }

  function closeModal() {
    setSelectedImageIndex(null);
  }

  function navigateImages(direction) {
    if (selectedImageIndex !== null) {
      let newIndex = selectedImageIndex + direction;
      if (newIndex < 0) {
        newIndex = galleryImages.length - 1;
      } else if (newIndex >= galleryImages.length) {
        newIndex = 0;
      }
      setSelectedImageIndex(newIndex);
    }
  }

  function renderImages() {
    return galleryImages.map((image, i) => {
      return (
        <div className="grid" key={i} onClick={() => openModal(i)}>
          <img src={image} alt="" />
        </div>
      );
    });
  }

  return (
    <>
      <div className="masonry">{renderImages()}</div>
      {selectedImageIndex !== null && (
        <Model onClose={closeModal}>
          <div className={classes.modalContent}>
            <img className={classes.modalImage} src={galleryImages[selectedImageIndex]} alt="" />
            <div className={classes.buttonContainer}>
              <button onClick={() => navigateImages(-1)}><FiChevronLeft/></button>
              <button onClick={closeModal}><FiXCircle/></button>
              <button onClick={() => navigateImages(1)}><FiChevronRight/></button>
            </div>
          </div>
        </Model>
      )}
    </>
  );
}

export default Masonry;

//useEFFECT if we run into problems with loading images later

//   const [loadedImages, setLoadedImages] = useState([]);
  
//   useEffect(() => {
//     if (selectedImageIndex !== null) {
//       setLoadedImages(prevImages => {
//         if (!prevImages.includes(selectedImageIndex)) {
//           return [...prevImages, selectedImageIndex];
//         }
//         return prevImages;
//       });
//     }
//   }, [selectedImageIndex]);


//           <div className={classes.modalContent}>
//             {loadedImages.includes(selectedImageIndex) ? (
//               <img className={classes.modalImage} src={galleryImages[selectedImageIndex]} alt="" />
//             ) : (
//               <div>Loading...</div>
//             )}
//             <div className={classes.buttonContainer}>
//               <button onClick={() => navigateImages(-1)}><FiChevronLeft/></button>
//               <button onClick={closeModal}><FiXCircle/></button>
//               <button onClick={() => navigateImages(1)}><FiChevronRight/></button>
//             </div>
//           </div>
