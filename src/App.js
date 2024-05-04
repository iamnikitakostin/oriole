import './App.css';
import Landing from "./pages/Landing/Landing";
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Menu from './pages/Menu/Menu';
import ContactUs from './pages/ContactUs/ContactUs';
import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    console.log(loaded)
    if (loaded) {
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 250);
    } else {
      document.body.style.overflow = 'hidden';
    }

  }, [loaded]);
  return (
    <div className="App">
      {!loaded && (
        <div className={`loading ${loaded ? 'fade-out' : ''}`}>
        <ClipLoader
          color="#f5a201"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      )}
      <Landing setLoaded={setLoaded}/>
      <About />
      <Menu />
      <Gallery />
      <ContactUs />
    </div>
  );
}

export default App;
