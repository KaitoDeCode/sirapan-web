import React from 'react'
import "./Navigation.scss"
import {useNavigate} from "react-router-dom"

const Navigation = () => {

    const Navigate = useNavigate()

  return (
    <nav>
        <h2 onClick={()=> Navigate("/")} className="nav-title">Sirapan</h2>
        <ul className='wrapper-nav-link'>
            <li><p onClick={()=>Navigate("/")}>Home</p></li>
            <li><p onClick={()=>Navigate("/sejarah")}>Sejarah</p></li>
            <li><p onClick={()=>Navigate("/wisata")}>Wisata</p></li>
            <li><p onClick={()=>Navigate("/lainya")}>Lainya</p></li>
        </ul>
    </nav>
  )
}

export default Navigation