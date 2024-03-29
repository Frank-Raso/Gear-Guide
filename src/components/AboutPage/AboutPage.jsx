import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';

import './AboutPage.css';

function AboutPage() {
  const [imageIDs, setImageIDs] = useState();
  const goGit = () => {
    window.location = 'https://github.com/Frank-Raso/';
  };
  const goLinkedIn = () => {
    window.location = ' https://www.linkedin.com/in/frankraso/';
  };

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
      <img className="icoA" src="favicon.ico" alt="" />

      <h4>Welcome to the Gear Guide!</h4>
      <p className="aboutText">
        The Gear Guide was created for musicians and gear heads to come together
        and build upon the knowledge base of the industry, and to help upcoming
        musicians find the gear they love!{' '}
      </p>
      <div>
        <br />
        {/* {imageIDs && imageIDs.map((imageId, index) => (
          <Image
            className="image"
            key={index}
            cloudName="dzdhhbcfp"
            publicId={imageId}
            width="200"
            crop="scale"
          />))} */}
      </div>
      <p>This Site Utilizes</p>
      <p>
        {' '}
        | React | Redux | Redux Saga| Node | Express | Multer | Cloudinary |
        Material UI | PostgreSQL |{' '}
      </p>
      <h4>About the Creator:</h4>
      <h5>Frank Raso</h5>
      <p className="aboutText">
        <BsIcons.BsGithub className="personals" onClick={goGit} />
        <FaIcons.FaLinkedin className="personals" onClick={goLinkedIn} />
      </p>
    </div>
  );
}

export default AboutPage;
