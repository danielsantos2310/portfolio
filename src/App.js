import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import CV from './components/CV/cv'
import './App.scss'
import { Expense } from './components/Expense'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<CV />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="*" element={<div>No content</div>} />
      </Route>
    </Routes>
  </>
  )
}

export default App