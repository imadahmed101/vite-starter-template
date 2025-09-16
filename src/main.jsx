import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Example from './pages/Example/Example'
// import Home from './pages/home'
// import Services from './pages/services'
// import Contact from './pages/contact'
// import Portfolio from './pages/portfolio'
// import Error from './pages/error'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Example />} />
      {/* <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/*" element={<Error />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>,
)
