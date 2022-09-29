import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import './Edit.css';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextareaAutosize, TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControl, Select, makeStyles } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 160,
  },
}));

function Edit() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const gear = useSelector((store) => store.eachGear);
  const [previewSource, setPreviewSource] = useState();
  const [makeModel, setMakeModel] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [review, setReview] = useState('');
  const [img, setImg] = useState('');
  const [value, setValue] = useState('');
  let userImage = useSelector((store) => store.imageReducer);
  let editImage = useSelector((store) => store.imageEditReducer);

  let { id } = useParams();
  const classes = useStyles();

  const uploadImage = () => {
    console.log('TESTING UPLOAD IMAGE', img);
    let imageToSend = new FormData();
    imageToSend.append('file', img);
    console.log(imageToSend);
    dispatch({ type: 'SEND_EDITIMAGE', payload: imageToSend });
  };

  const setNewUpload = () => {
    let gearPost = {
      image: editImage,
      id: id,
    };
    console.log(gearPost);
    dispatch({ type: 'EDIT_PUTIMAGE', payload: gearPost });
  };

  useEffect(() => {
    if (editImage.length != 0) {
      setNewUpload();
    }
  }, [editImage]);

  const handleValueChange = (event) => setValue(event.target.value);

  const makeIn = () => {
    console.log('in makeIn:');
    setMakeModel(event.target.value);
    console.log(makeModel);
  };
  const yearIn = () => {
    console.log('in yearIn:');
    setYear(event.target.value);
    console.log(year);
  };
  const reviewIn = () => {
    console.log('in yearIn:');
    setReview(event.target.value);
    console.log(review);
  };
  const typeIn = () => {
    console.log('in typeIn:');
    setType(event.target.value);
    console.log(type);
  };

  const setGear = (event) => {
    console.log(makeModel);
    console.log(year);
    console.log(value);
    console.log(review);

    if (makeModel === '') {
      alert('Please add Make/Model before continuing');
    }
    if (value === '') {
      alert('Please add Type before continuing');
    } else if (year === '') {
      alert('Please add Year before continuing');
    } else if (review === '') {
      alert('Please add Review before continuing');
    } else {
      let gearPost = {
        title: makeModel,
        type_id: value,
        year: year,
        review: review,
        user_id: user.id,
        id: id,
      };
      console.log(gearPost);
      dispatch({ type: 'EDIT_GEAR', payload: gearPost });
      setTimeout(function () {
        history.push('/profile');
      }, 1);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setImg(file);
  };

  useEffect(() => {
    if (img != '') {
      console.log('in useEffect');
      uploadImage();
    }
  }, [img]);

  useEffect(() => {
    console.log('in useEffect');
    setMakeModel(gear.title);
    setYear(gear.year);
    setReview(gear.review);
    setValue(gear.type_id);
    let editImage = gear[0].image;
    setPreviewSource(editImage);
  }, []);

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <div className="gear_page">
      {gear.length === 0 ? (
        <div>
          <h1 className="spinner"></h1>
        </div>
      ) : (
        <div className="addContainer">
          <h2>- Edit Gear -</h2>
          <br />
          <div>
            <br />
            <span className="previewImg">
              {previewSource && (
                <img
                  src={previewSource}
                  alt="chosen"
                  style={{ height: '200px' }}
                />
              )}
            </span>
          </div>
          <Button variant="contained" color="primary" component="label">
            Upload Img
            <input
              color="primary"
              variant="contained"
              type="file"
              name="img"
              onChange={handleFileInputChange}
              hidden
            />
          </Button>
          <br />
          <br />
          <br />
          <br />
          <TextField
            className="textfield"
            defaultValue={gear[0].title}
            type="text"
            onChange={makeIn}
            label=" Make-Model"
            variant="standard"
          />
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel> Gear Type </InputLabel>
            <Select onChange={handleValueChange} defaultValue={gear[0].type_id}>
              <MenuItem value="Guitar">Guitar</MenuItem>
              <MenuItem value="Amp">Amp</MenuItem>
              <MenuItem value="Accessory">Accessory</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <br />
          <TextField
            className="textfield"
            type="text"
            onChange={yearIn}
            label="Year"
            variant="standard"
            defaultValue={gear[0].year}
          />
          <br />
          <TextareaAutosize
            defaultValue={gear[0].review}
            className="textfield"
            type="text"
            onChange={reviewIn}
            label="Review"
            multiline
            minRows={6}
            maxRows={8}
            style={{ width: 400, backgroundColor: 'transparent' }}
            variant="standard"
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            className="btn"
            onClick={setGear}
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Edit;
