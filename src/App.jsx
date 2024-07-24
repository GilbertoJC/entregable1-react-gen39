
import { useState } from 'react';
import './App.css';
import ShowButton from './component/ShowButton';
import ShowPhrase from './component/ShowPhrase';
import randomArrs from './services/randomArrs';
import arr from './utils/phrases.json';
import imagesArr from './utils/images.json'

function App() {

  const quote = randomArrs(arr);
  const [randomPhrase, setRandomPhrase] = useState(quote);
  const photo = randomArrs(imagesArr);
  const [image, setImage] = useState(photo);

  const appStyles = {
  backgroundImage: `url(../fortuna-2/fondo${image}.png)`,
  
  }
  
  return (
    <div className='app' style={appStyles}>
        <h1 className='app__title'>Galletas de la Fortuna</h1>
        <ShowButton
          setRandomPhrase = {setRandomPhrase}
          setImage={setImage}
        />
        <ShowPhrase
          randomPhrase = {randomPhrase}
        />
     </div>
  )
}

export default App;
