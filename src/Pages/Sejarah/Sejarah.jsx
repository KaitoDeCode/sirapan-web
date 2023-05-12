import React from 'react'
import { MakamTedjo } from '../../Assets'
import "./Sejarah.scss"
const Sejarah = () => {
  return (
    <article className='app-sejarah'>
        <h3>Sejarah Desa Sirapan</h3>
        <br />
        <img src={MakamTedjo} alt="" />
        <br />
        <p>Sirapan adalah sebuah desa di kecamatan Madiun, Madiun, Jawa Timur, Indonesia. Sejarah Desa Sirapan didirikan oleh B.P.H. Tedjokusumo beliau adalah putra dari Sultan Hamengku Buwono II dari ibu bernama Bendoro Mas Ayu Rantamsari. Bermula pada tahun 1910, Pemberontakan Bupati Madiun, Raden Rangga Prawiradirja III terhadap Belanda, Sultan Hamengku Buwono II mengutus salah satu putranya dan pasukannya untuk membantu perjuangan Raden Rangga III yang tak lain menantunya sendiri. Belanda menang segalanya dan pasukan Raden Rangga III kalah dan kocar-kacir, Sultan Hamengku Buwono dipaksa turun takhta oleh Belanda, setelah Belanda mengetahui Sultan membantu Raden Rangga III. Mendengar Kesultanan Yogyakarta sudah berganti kepemimpinan ke Sultan Hamengku Buwono III yang lebih pro ke Belanda, untuk menghindari penangkapan dan pengejaran dari Belanda. Pangeran Tedjokusumo dan pasukannya memutuskan untuk tidak kembali ke Yogyakarta, menetap dan bertahan di tepi hutan sebelah timur kota Madiun menyamar menjadi rakyat biasa, kemudian meneruskan membabat hutan membangun sebuah perkampungan yang menjadi ciri khasnya adalah atap rumahnya tersusun dari sirap (potongan kayu tipis-tipis), kemudian perkampungan ini sekarang kita kenal dengan nama Desa Sirapan.</p>
    </article>
  )
}

export default Sejarah