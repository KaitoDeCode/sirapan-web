import React from 'react'
import {useNavigate} from "react-router-dom"
const NotFound = () => {
  const Navigate = useNavigate()
  return (
    <div>
      <h2>Halaman Yang kamu cari tidak ditemukan!</h2>
     <div className='Notfound-back'>
     <p>Memangnya kamu lagi cari apa?</p>
      <button onClick={()=> Navigate("/")}>Ayo Kembali</button>
     </div>
    </div>
  )
}

export default NotFound