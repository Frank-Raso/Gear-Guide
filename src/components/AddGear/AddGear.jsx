import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import './AddGear.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControl, Select, makeStyles } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 200,
  }
}));

function AddReview() {

  const dispatch = useDispatch();
  const history = useHistory();
  const userImage = useSelector(store => store.imageReducer);
  const user = useSelector((store) => store.user);
  const [previewSource, setPreviewSource] = useState();
  const [makeModel, setMakeModel] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [review, setReview] = useState('');
  const [img, setImg] = useState('');
  const [value, setValue] = useState('');

  const classes = useStyles();

  const uploadImage = () => {
    console.log('TESTING UPLOAD IMAGE', img);
    let imageToSend = new FormData();
    imageToSend.append('file', img);
    console.log(imageToSend);
    dispatch({ type: 'SEND_IMAGE', payload: imageToSend });
  }
  const handleValueChange = (event) => setValue(event.target.value);
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


  const setGear = () => {

    console.log(makeModel);
    console.log(year);
    console.log(value);
    console.log(userImage);
    console.log(review);

    if (makeModel == "") {
      alert('Please add Make/Model before continuing')
    } else if (value == "") {
      alert('Please add Type before continuing')
    } else if (year == "") {
      alert('Please add Year before continuing')
    } else if (review == "") {
      alert('Please add Review before continuing')
    }
    else {

      let gearPost = {
        title: makeModel,
        type_id: value,
        year: year,
        review: review,
        image: userImage,
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
  }

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

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    }
  };

  return (
    <div className="addContainer">
      <h2>- Add Gear -</h2>
      <br />
      <div>
        <br />
        <span className='previewImg'>
          {previewSource && (<img src={previewSource} alt="chosen" style={{ height: '200px' }} />)}
        </span>
      </div>
      <Button variant='contained' color='primary' component="label">Upload Img<input color='primary' variant='contained' type="file" name='img' onChange={handleFileInputChange} hidden /></Button>
      <br />
      <br />
      <br />
      <br />
      <TextField className='textfield' type="text" onChange={makeIn} label=" Make-Model" variant="standard" />
      <br />
      <br />
      <FormControl className={classes.formControl} >
        <InputLabel variant='standard'

        > Gear Type </InputLabel>
        <Select onChange={handleValueChange} >
          <MenuItem value='Guitar'>Guitar</MenuItem>
          <MenuItem value='Amp'>Amp</MenuItem>
          <MenuItem value='Accessory'>Accessory</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <TextField className='textfield' type="text" onChange={yearIn} label="Year" variant="standard" />
      <br />
      <br />
      <br />
      <TextareaAutosize
        className='textfield'
        type="text"
        onChange={reviewIn}
        label="Review"
        multiline
        minRows={6}
        maxRows={8}
        style={{ width: 400, backgroundColor: 'transparent' }}
        variant="standard" />
      <br />
      <Button variant='contained' color="primary" className='btn' onClick={setGear} >Submit</Button>
    </div>
  );
};


export default AddReview;
