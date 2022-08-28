import React, { Children } from 'react';
import styles from './ImageGallery.module.css';

const Gallery = <ul className={styles.ImageGallery}>{children}</ul>;
export default Gallery;
