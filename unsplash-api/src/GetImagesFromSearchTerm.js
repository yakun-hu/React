import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImagesToGallery, {ImagesProvider} from './ImagesToGallery';

export default function GetImagesFromSearchTerm() {
  const {term} = useParams();
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
    useEffect(() => {
    const fetchData = async () => { setLoader(true);
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=ExavIoDYPHSj04sZE1Q4ZOLn3CaKueXxnC4R3IWHgGg&per_page=12`
        );
        const json = await response.json(); setLoader(false);
        setImages(json.results);
      } catch (error) {
        console.error('Error fetching data:', error); setLoader(false);
      }
    };

    fetchData();
  }, [term]);
  return (
    <ImagesProvider images={images}>
      {loader ? ( 
        <div>Loading...</div>
      ) : ( 
        <ImagesToGallery /> 
      )}
    </ImagesProvider>
  );
}
