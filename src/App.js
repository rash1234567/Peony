import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Index from './Pages/Index';
import LargeNav from './Component/LargeNav';
import SmalNav from './Component/SmalNav';
import Contact from './Pages/Contact';
import About from './Pages/About'
import Scarves from './Pages/Scarves'
import Accesories from './Pages/Accesories'
import Blog from './Pages/Blog'
// import Customized from './Pages/Customized'
import Footer from './Component/Footer';


function App() {
  return (
    <>
      <Router>
        <LargeNav/>
        <SmalNav/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/scarves' element={<Scarves/>}/>
          <Route path='/Accesories' element={<Accesories/>}/>
          {/* <Route path='/' element={<Customized/>}/> */}
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
