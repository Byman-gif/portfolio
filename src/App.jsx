import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import { Home, About, Projects, Contact } from './pages'

const App = () => {
  const basename = '/portfolio';

  return (
    <main className="bg-slate-300/20 h-full">
      <Router basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App