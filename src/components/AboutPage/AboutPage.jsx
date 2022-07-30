

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Image} from 'cloudinary-react';
import './AboutPage.css';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
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
      <h4>Welcome to the Gear Guide!</h4>
        <p className='aboutText' >The Gear Guide was created for musicians and gear heads to come together and build upon the knowlege base of the industry, and to help upcoming musicians find the gear they love! </p>
      <div>
        <br />

        {imageIDs && imageIDs.map((imageId, index) => (
          <Image
          className="image"
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

export default AboutPage;
