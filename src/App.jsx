import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import PersonalBirthChart from './pages/services/PersonalBirthChart.jsx';
import DriverConductorRelationship from './pages/services/DriverConductorRelationship.jsx';
import NameNumberCompatibility from './pages/services/NameNumberCompatibility.jsx';
import MobileNumberNumerology from './pages/services/MobileNumberNumerology.jsx';
import SignatureNumerology from './pages/services/SignatureNumerology.jsx';
import BabyNameNumber from './pages/services/BabyNameNumber.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Product from './pages/Product.jsx';
import NameNumberCompounder from './pages/NameNumberCompounder.jsx';
import ThankYou from './pages/ThankYou.jsx';
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTopOnRouteChange />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/services/personal-birth-chart" element={<PersonalBirthChart />} />
          <Route path="/services/driver-conductor-relationship" element={<DriverConductorRelationship />} />
          <Route path="/services/name-number-compatibility" element={<NameNumberCompatibility />} />
          <Route path="/services/mobile-number-numerology" element={<MobileNumberNumerology />} />
          <Route path="/services/signature-numerology" element={<SignatureNumerology />} />
          <Route path="/services/baby-name-number" element={<BabyNameNumber />} />
          <Route path="/products" element={<Product />} />
          <Route path="/name-number-compounder" element={<NameNumberCompounder />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* Redirect unknown routes to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
