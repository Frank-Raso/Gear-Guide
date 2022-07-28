import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import './AddReview.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControl, Select } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';


function AddReview() {
  let imgtest = 'https://imgs.search.brave.com/osRkB2Q1GE8OZ1kTUXJMU5R16P-J3jbUQCoqg0njG0k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzEx/NDAvMjQyNi9wcm9k/dWN0cy9HaWJzb24t/VVNBLTE5MjctTGVz/LVBhdWwtQ3VzdG9t/LVJlaXNzdWUtVk9T/LUVsZWN0cmljLUd1/aXRhci1FYm9ueS0x/MjM4NV8xNjAweDE2/MDAuanBnP3Y9MTU3/MTQzOTIzNw'

  let imgSrc = imgtest
  
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState();

  const [makeModel, setMakeModel] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [review, setReview] = useState('');
  const [img, setImg] = useState('');

  const makeIn = () => {
    console.log('in makeIn:')
    setMakeModel(event.target.value)
    console.log(makeModel);
  }
  const yearIn = () => {
    console.log('in yearIn:')
    setYear(event.target.value)
    console.log(year);
  }
  const reviewIn = () => {
    console.log('in yearIn:')
    setReview(event.target.value)
    console.log(review);
  }
  const typeIn = () => {
    console.log('in typeIn:')
    setType(event.target.value)
    console.log(type);
  }

  const setGear = (event) => {
    console.log(makeModel);
    console.log(year);
    console.log(type);
    console.log(review);

    if (makeModel == "") {
      alert('Please add Make/Model before continuing')
    } else if (type == "") {
      alert('Please add Type before continuing')
    } else if (year == "") {
      alert('Please add Year before continuing')
    } else if (review == "") {
      alert('Please add Review before continuing')
    }
    else {

      let gearPost = {
        title: makeModel,
        type_id: type,
        year: year,
        review: review,
        image: imgSrc,
        user_id: user.id,
      };
      axios.post('/api/AddGear', gearPost).then((response) => {
        console.log(response.data);
        history.push('/profile')

      }).catch((err) => {
        console.log(err);
        alert('err posting fbp');
      })

    }
    handleSubmitFile(event);
  }
  let age;
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
  };
  const handleSubmitFile = (e) => {
    console.log('submitting file');
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource)
  }
  const uploadImage = async (base64EncodedImage) => {
  
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">

      <form className="form">

        <p>Upload a new review here</p>
        <h1>Add Gear:</h1>
        <input type="text" placeholder='Gear Make/Model' onChange={makeIn} />
        {/* <TextField className='textfield'  type="text" onChange={makeIn} id="outlined-basic" label="Gear make/model" variant="outlined" /> */}

        <select onChange={typeIn} >
          <option value="" selected disabled hidden>Gear Type</option>
          <option value="Guitar">Guitar</option>
          <option value="Amp">Amp</option>
          <option value="Accessory">Accessory</option>
        </select>

        <input type="text" placeholder='Year' onChange={yearIn} />
        {/* <TextField className='textfield' type="text" onChange={yearIn} id="outlined-basic" label="Year" variant="outlined" /> */}

        <input type="text" placeholder='Review' onChange={reviewIn} />
        {/* <TextField className='textfield' type="text" onChange={reviewIn} id="outlined-basic" label="Review" variant="outlined" /> */}


        <input type="file" name='image' onChange={handleFileInputChange} value={fileInputState}
          className={"form-input"} />
        <button className='btn' onClick={setGear} >Submit</button>
      </form>
      {previewSource && (<img src={previewSource} alt="chosen" style={{ height: '300px' }} />)}
    </div>
  );
};

// this allows us to use <App /> in index.js
export default AddReview;
