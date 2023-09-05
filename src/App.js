import { BrowserRouter as Router,Routes,  Route  } from 'react-router-dom';

import './App.css';
import './Style/Style.scss'
import './Style/Header.scss'
import './Style/Home.scss'
import './Style/Footer.scss'
import './Style/Contact.scss'
import './Style/Services.scss'
import './Style/mediaquery.scss'


import Header from './Component/Header'; 
import Footer from './Component/Footer';
import Home from './Component/Home';
// import About from './Component/About';

import Contact from './Component/Contact';
// import Brands from './Component/Brands'
import Services from './Component/Services';
function App() {
  return (
    <div >
    <Router>
    <Header/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='contact'  element={<Contact/>}/>
      <Route path='/servicse'  element={<Services/>}/>

      {/* <Route path='about'  element={<About/>}/> */}
      {/* <Route path='/'   element={<Brands/>}/> */}

      <Route path='*'  element={<> Page not Found 404 </>}/>
    </Routes>
    <Footer/>
    </Router>
      
    </div>
  );
}

export default App;
