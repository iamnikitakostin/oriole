import logo from './logo.svg';
import './App.css';
import Landing from "./pages/Landing/Landing";
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Menu from './pages/Menu/Menu';
import ContactUs from './pages/ContactUs/ContactUs';


function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Menu />
      <Gallery />
      <ContactUs />
    </div>
  );
}

export default App;
