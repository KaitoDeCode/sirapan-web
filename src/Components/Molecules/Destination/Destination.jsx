import React from 'react'
import "./Destination.scss"

const Destination = ({desName,desImg,desDesc}) => {
  return (
    <div className='destination'>
        <h3 className='destination-name'>{desName}</h3>
        <br />
        <img className='destination-img' src={desImg} alt="Destinasi Wisata di Sirapan" />
        <br />
        <p className='destination-desc'>{desDesc}</p>
    </div>
  )
}

export default Destination