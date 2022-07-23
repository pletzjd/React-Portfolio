import React , {useState} from "react";
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';

function App() {
  const [active, setActive] = useState('about')
  return (
    <div>
      <div><Header setActive = {setActive}/></div>
      <div>
        {active === 'about' && <About />}
        {active === 'portfolio' && <Portfolio />}
        {active === 'contact' && <Contact />}
        {active === 'resume' && <Resume />}
      </div>
    </div>

  );
}

export default App;
