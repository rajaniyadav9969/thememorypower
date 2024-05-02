import 'bootstrap/dist/css/bootstrap.min.css'
import { IoIosArrowUp } from 'react-icons/io'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import AboutUs from './Pages/AboutUs/AboutUs'
import ContactUs from './Pages/ContactUs/ContactUs'
import Home from './Pages/Home/Home'

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <div className='scrollToTop' >
        <button onClick={scrollToTop}><IoIosArrowUp /></button>

      </div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Navigate to="home"></Navigate>} />
        {/* About us */}
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/meet-founder' element={<AboutUs />} />

        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
