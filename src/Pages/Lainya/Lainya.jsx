import React from 'react'
import { Article, Creator } from '../../Components'
import { artcImgPertama } from '../../Assets'
import "./Lainya.scss"

const Lainya = () => {
  return (
    <div className='lainya'>
      <h2 className='lainya-title'> Hal Menarik Di Sirapan </h2>
      <br /><br /><br />
       <Article
       artcTitle="Bupati Madiun Hadir DI Acara Bersih Desa"
       artcImg={artcImgPertama}
       artcDesc="Bapak Bupati hadir pada acara Bersih desa rutin yang diselenggarakan oleh desa Sirapan untuk menyambut hari jadi ke 195 tahun dan wujud dari melestarikan budaya juga bentuk rasa sukur warga Sirapan atas segala nimat karunianya"
       artcUrl="https://mabesbharindo.com/93695-2/"
       />
       <Creator/>
    </div>
  )
}

export default Lainya