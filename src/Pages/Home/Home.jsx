import React from 'react'

import "./Home.scss"
import { HomeImg } from '../../Assets'
const Home = () => {
  return (
    <article className='app-home'>
        <img src={HomeImg} alt='sirapan'/>
        <article className='data-desa-sirapan'>
            <h3><b>KETERANGAN</b></h3>
            <table>
                <tr>
                    <td>Nama Desa :</td>
                    <td>Ds Sirapan</td>
                </tr>
                <tr>
                    <td>jmlh Dusun:</td>
                    <td>8 dusun</td>
                </tr>
                <tr>
                    <td>Kecamatan :</td>
                    <td>Madiun</td>
                </tr>
                <tr>
                    <td>Kabupaten :</td>
                    <td>Madiun</td>
                </tr>
                <tr>
                    <td>Jmlh Penduduk :</td>
                    <td>20Ribu jiwa</td>
                </tr>
            </table>
        </article>
    </article>
  )
}

export default Home