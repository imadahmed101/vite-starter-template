import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Example from './pages/Example/Example'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Products from './pages/Products'
import Error from './pages/Error'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/example" element={<Example />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Error />} /> 
    </Routes>
    <Footer />
  </BrowserRouter>,
)
