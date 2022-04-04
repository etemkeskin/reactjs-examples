import React, { useState } from 'react'
import ImagesIG2 from "../assets/ImagesIG2";

const ImageGallery2 = () => {

const [selectedImg, setSelectedImg] = useState(ImagesIG2[0])


  return (
      <div className="layout-ig2">
        <div className="container-ig2">
            <img src={selectedImg} alt="selected" className='selected' />
            <div className="imgContainer-ig2">
                {ImagesIG2.map((img, index) => (
                    <img 
                    style={{ border: selectedImg === img ? "4px solid purple" : ""}}
                    key={index} src={img} alt=""
                    onClick={() => setSelectedImg(img) }
                    />
                ))}
            </div>
        </div>
      </div>
    
  )
}

export default ImageGallery2