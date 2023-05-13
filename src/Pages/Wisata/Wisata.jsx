import React from 'react'
import Destination from '../../Components/Molecules/Destination/Destination'
import { WatuSugih } from '../../Assets'
import "./Wisata.scss"
const Wisata = () => {
  return (
    <div className='wisata'>
      <h2 className='wisata-sub-title'>Tempat Wisata Di Sirapan</h2>
      <br />
      <br /><br />
        <Destination
          desName="Watu Sugih"
          desImg={WatuSugih}
          desDesc="Selamat datang di Watu Sugih, tempat wisata yang memikat hati dengan keunikannya. Dengan namanya yang khas, Watu Sugih menjanjikan pengalaman yang tak terlupakan bagi para pengunjungnya.

          Watu Sugih dipenuhi dengan segudang cerita menarik yang melibatkan sejarah, keajaiban alam, dan legenda-legenda misterius. Setiap batu dan sudut di tempat ini memiliki kisah yang menggugah rasa ingin tahu dan imajinasi pengunjungnya. Para pengembara yang menyukai petualangan pasti akan terpesona oleh daya tariknya.
          
          Namun, yang membuat Watu Sugih semakin istimewa adalah rumor-rumor mistis yang mengelilinginya. Kisah-kisah tentang arwah penjaga batu purba yang menghuni tempat ini, suara-suara aneh yang terdengar di malam hari, dan penampakan-penampakan gaib yang muncul di antara pepohonan membuat Watu Sugih menjadi tempat yang menantang iman dan keberanian. Bagi mereka yang memiliki minat dalam hal-hal yang gaib dan supranatural, Watu Sugih adalah surga yang menawarkan pengalaman yang tak terlupakan.
          
          Meskipun memiliki aura mistis, Watu Sugih telah bertransformasi menjadi destinasi wisata yang menarik. Dikelilingi oleh keindahan alam yang menakjubkan, Watu Sugih menawarkan pemandangan yang memukau, termasuk sebuah air terjun yang spektakuler, hutan yang rimbun, dan pemandangan lembah yang memanjakan mata. Keasrian alam di sekitar Watu Sugih menyatu dengan atmosfer misteriusnya, menciptakan pengalaman yang unik dan memikat.
          
          Tidak hanya menawarkan keindahan alam, Watu Sugih juga menyediakan fasilitas yang memadai bagi para pengunjung. Terdapat jalur pendakian yang aman dan terawat, tempat istirahat yang nyaman, serta area piknik untuk keluarga dan teman-teman. Selain itu, para wisatawan juga dapat menjelajahi situs-situs bersejarah di sekitar Watu Sugih, menambahkan dimensi budaya yang lebih dalam ke dalam pengalaman mereka.
          
          Watu Sugih adalah tempat yang memadukan keajaiban alam, legenda mistis, dan kisah-kisah menarik dalam satu destinasi wisata yang tak terlupakan. Bagi mereka yang berani menghadapi tantangan dan siap mengungkap misteri yang ada, Watu Sugih menanti untuk memberikan pengalaman yang penuh keajaiban dan kegembiraan."
        />
    </div>
  )
}

export default Wisata