import React from 'react';
import { createContext, useContext } from 'react';

export function ImagesProvider({ children, images }) {
  return (
    <ImagesContext.Provider value={images}>
      {children}
    </ImagesContext.Provider>
  );
}

const ImagesContext = createContext();

function NoImagesFound () {
  return "No images found";
}

export default function ImagesToGallery () {
  const images = useContext(ImagesContext);
  return (
    <div className="images">
      {images.length === 0 ? (
        <NoImagesFound/>
      ) : (
      images.map((image) => (
        <a href = {image.urls.full}>
        <img
          key={image.id}
          src={image.urls.small} 
          alt={image.alt_description}
          className="image"
        /></a>
      ))
    )} 
  </div>
  );
}