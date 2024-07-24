import React from 'react';
import arr from '../utils/phrases.json';
import randomArrs from '../services/randomArrs';
import imagesArr from '../utils/images.json'

const ShowButton = ({setRandomPhrase, setImage}) => {

  const handleClick = () => {
    const quote = randomArrs(arr);
    setRandomPhrase(quote);
    const photo = randomArrs(imagesArr);
    setImage(photo);
  }
  
  return (
    <button onClick={handleClick} className='app__btn'>Probar mi suerte</button>
  )
}

export default ShowButton;