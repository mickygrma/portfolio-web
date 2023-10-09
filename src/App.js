import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
