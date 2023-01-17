import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Index from './Pages/index';
import LargeNav from './Component/LargeNav';
import SmalNav from './Component/SmalNav';
import Contact from './Pages/Contact';
import About from './Pages/About'
import Footer from './Component/Footer';


function App() {
  return (
    <>
      <Router>
        <LargeNav/>
        <SmalNav/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
