import React, { useState } from 'react';
import Modal from 'react-modal';
import Card from './Card'
import styles from '../styles/CardsContainer.module.css'
import Masonry from "react-masonry-css";
import Image from 'next/image'

const CardsContainer = (props: {imageUrls:string[]}) => {

  // *************** for post modal *************** //
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const handleOpenModal = (imageurl: string) => {
    console.log(imageurl);
    setModalImg(imageurl);
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }


  //for modal
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  //for masonry
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  Modal.setAppElement('#__next');
  

  return (
    <>
      <Modal
        isOpen={showModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => handleCloseModal()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={()=> handleCloseModal()}>close</button>
        <Image src={modalImg} layout='fill' alt='some image' objectFit={'fill'}/>
        <div>I am a modal</div>
      </Modal>
      <Masonry 
        breakpointCols={breakpointColumnsObj}
        className={styles.my_masonry_grid}
        columnClassName={styles.my_masonry_grid_column}
      >
        {props.imageUrls.map((imageurl, ind) => (<div key={imageurl} onClick={() => {console.log('cliekced')}}><Card imageurl={imageurl} key={imageurl} handleOpenModal={handleOpenModal}/></div>))}
      </Masonry>
    </>
  )
}

export default CardsContainer
