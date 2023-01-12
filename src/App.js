import './App.css';
import './bootstrap.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LandingPage from './views/LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />

    </div>
  );
}

export default App;
