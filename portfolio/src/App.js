import React , {useState} from "react";
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer'
import './styles/reset.css'
import './styles/style.css'

function App() {
  const [active, setActive] = useState('about')
  return (
    <div className="body">
      <Header setActive = {setActive}/>
      <div>
        {active === 'about' && <About />}
        {active === 'portfolio' && <Portfolio />}
        {active === 'contact' && <Contact />}
        {active === 'resume' && <Resume />}
      </div>
      <div className="footer"><Footer /></div>
    </div>

  );
}

export default App;
