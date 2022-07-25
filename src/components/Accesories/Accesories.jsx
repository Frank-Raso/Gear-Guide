

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Image} from 'cloudinary-react';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Accesories() {
  const [imageIDs, setImageIDs] = useState();

  const loadImages = async () => {
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      console.log(data);
      setImageIDs(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadImages();
  }, []);
  return (
    <div className="container">
      <p>Welcome to the Gear Guide!</p>
        <p>The Gear Guide was created for musicians and gear heads to come together and build upon the knowlege base of the industry. </p>
      <div>
        <h1 className="title">Accesories</h1>
        {imageIDs && imageIDs.map((imageId, index) => (
          <Image
            key={index}
            cloudName="dzdhhbcfp"
            publicId={imageId}
            width="200"
            crop="scale"
          />))}
      </div>
    </div>
  );
}

export default Accesories;
