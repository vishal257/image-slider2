import { useState } from 'react'
import './App.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';

function App() {

  const imageUrls:string[] = [img1,img2,img3,img4,img5];
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((imageIndex) => {
      if(imageIndex === imageUrls.length - 1){
        return 0;
      }
      return imageIndex + 1;
    });
  }

  const prevImage = () => {
    setImageIndex((imageIndex) => {
      if(imageIndex === 0){
        return imageUrls.length - 1;
      }
      return imageIndex - 1;
    })
  }

  const imageChange = (index: number) => {
    setImageIndex(index);
  }


  return (
    <div style={{position: 'relative'}}>
     <div className='image-container' style={{overflow: 'hidden', position: 'relative'}}>

      {imageUrls.map((url,index) => (
          <img src={url} key={index} style={{translate: `${-100*imageIndex}%`}}></img>
      ))}
      <button className='btn next' onClick={nextImage}><h3>next</h3></button>
      <button className='btn prev' onClick={prevImage}><h3>prev</h3></button>
     </div>
      <div className='btn-container'>
        {imageUrls.map((_, index) => (
          <button key={index} onClick={() => imageChange(index)} style={index === imageIndex ? {color: 'orange'} : {}}>{index+1}</button>
        ))}
      </div>
    </div>
  )
}

export default App
