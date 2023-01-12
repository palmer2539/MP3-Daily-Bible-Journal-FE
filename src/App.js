import './App.css';
import './bootstrap.css';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LandingPage from './views/LandingPage/LandingPage';
import Notes from './views/Notes/Notes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} exact/>
          <Route path='/Notes' element={<Notes />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
