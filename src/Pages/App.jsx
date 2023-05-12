import React from 'react'
import { Header, Navigation } from '../Components'
import "./App.scss"
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Sejarah from './Sejarah/Sejarah'
import Wisata from './Wisata/Wisata'
import NotFound from './NotFound/NotFound'
import Lainya from './Lainya/Lainya'

const App = () => {
  return (
  <Router>
        <Navigation/>
        <Header/>
       <main>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/sejarah' element={<Sejarah/>}/>
                    <Route exact path='/wisata' element={<Wisata/>}/>
                    <Route exact path='/lainya' element={<Lainya/>}/>
                    <Route exact path='/*' element={<NotFound/>}/>
                </Routes>
       </main>
   </Router>
  )
}

export default App