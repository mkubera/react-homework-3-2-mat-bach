import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imgArray }) => {
  return imgArray.map(photoCard => {
    return (
      <li className={styles.ImageGalleryItem}>
        <img src={photoCard.previewURL} alt="" />
      </li>
    );
  });
};

export default ImageGalleryItem;
