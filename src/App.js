import './App.css';
import './bootstrap.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LandingPage from './views/LandingPage/LandingPage';
import Notes from './views/Notes/Notes';
import DailyVerse from './views/DailyVerse/DailyVerse';
import Faqs from './views/Faq/Faqs';
import ContactUs from './views/ContactUs/ContactUs';
import Bible from './views/Bible/Bible';
import AboutUs from './views/AboutUs/AboutUs';
import AccountInfo from './views/AccountInfo/AccountInfo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} exact/>
          <Route path='/notes' element={<Notes />}/>
          <Route path='/dailyverse' element={<DailyVerse />}/>
          <Route path='/faqs' element={<Faqs />}/>
          <Route path='/contactus' element={<ContactUs />}/>
          <Route path='/bible' element={<Bible />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/accountinfo' element={<AccountInfo />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
