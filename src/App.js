import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Format from './components/Format'
import CV from './components/CV/cv'
import './App.scss'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Format />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<div>No content</div>} />
      </Route>
    </Routes>
  </>
  )
}

export default App