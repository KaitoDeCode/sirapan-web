import React from 'react'
import { FotoCreator } from '../../../Assets'
import { IG, Tiktok, YT } from '../../../Assets/Icons'
import "./Creator.scss"

const Creator = () => {
  return (
    <div className='creator'>
      <br /><br />
      <h2 className='creator-title'>Creator :</h2>
      <div className='creator-content'>
          <img className='creator-foto' src={FotoCreator} alt="" />
          <div className='creator-biodata'>
              <h3>ADI KURNIAWAN</h3>
              <div className='creator-sosmed'>
                  <a className='sosmed' href='https://www.instagram.com/ikyadi_/'>
                  <img className='icons' src={IG} alt="Sosmed" />
                  <p>Instagram</p>
                  </a>
                  <a className='sosmed' href="https://youtube.com/@Akadeve">
                    <img className='icons' src={YT} alt="sosmed" />
                    <p>Youtube</p>
                  </a>
                  <a className='sosmed' href="https://www.tiktok.com/@ikyadi_?is_from_webapp=1&sender_device=pc">
                    <img className='icons' src={Tiktok} alt="sosmed" />
                    <p>Tiktok</p>
                  </a>

              </div>
          </div>
      </div>
    </div>
  )
}

export default Creator