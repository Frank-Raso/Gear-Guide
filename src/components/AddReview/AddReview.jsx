import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function AddReview() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    }
  }
const handleSubmitFile = (e) => {
  console.log('submitting file');
  e.preventDefault();
  if(!previewSource) return;
  uploadImage(previewSource)
}
const uploadImage = async (base64EncodedImage) => {

  try {
    await fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify({data: base64EncodedImage}),
      headers: {'Content-Type': 'application/json'}
    });
  } catch (error) {
    console.log(error);
  }
};
return (
  <div className="container">
    <form onSubmit={handleSubmitFile} className="form">
      <h2>Add Gear</h2>
      <p>Upload all Review Info Here</p>

      <h1>Upload:</h1>
      <input type="text" placeholder='Gear Name' />
      <input type="text" placeholder='Gear Type' />
      <input type="number" />
      <input type="file" name='image' onChange={handleFileInputChange} value={fileInputState} className={"form-input"} />
      <button className='btn' type='submit' >Submit</button>
      {/* <LogOutButton className="btn" /> */}
    </form>
    {previewSource && (<img src={previewSource} alt="chosen" style={{ height: '300px' }} />)}
  </div>
);
}

// this allows us to use <App /> in index.js
export default AddReview;
