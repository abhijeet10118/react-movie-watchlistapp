import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './pages/Home'
import MovieCard from './components/MovieCard'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Navbar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContent'

function App() {

  return (
    <MovieProvider>
      <Navbar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>

      </Routes>
    </main>
    </MovieProvider>
    
  )
}
export default App
