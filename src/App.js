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
import Contactus from './views/Contact/Contactus';
import Bible from './views/Bible/Bible';
import Aboutus from './views/About/Aboutus';
import AccountInfo from './views/Account/AccountInfo';
import LogIn from './views/LogInpage/LogIn';
import SignUp from './views/SignUppage/SIgnUp';
import NewEntry from './views/NewEntrypage/NewEntry';
import SingleEntry from './views/SingleEntrypage/SingleEntry';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} exact/>
          <Route path='/login' element={<LogIn />} exact/>
          <Route path='/signup' element={<SignUp />} exact/>
          <Route path='/journalentries' element={<Notes />}/>
          <Route path='/dailyverse' element={<DailyVerse />}/>
          <Route path='/faqs' element={<Faqs />}/>
          <Route path='/contactus' element={<Contactus />}/>
          <Route path='/bible' element={<Bible />}/>
          <Route path='/aboutus' element={<Aboutus />}/>
          <Route path='/newentry' element={<NewEntry />}/>
          <Route path='/journalentries/:id' element={<SingleEntry />}/>
          <Route path='/accountinfo' element={<AccountInfo />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
