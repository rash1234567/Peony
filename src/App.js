import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Index from './Pages/Index';
import LargeNav from './Component/LargeNav';
import SmalNav from './Component/SmalNav';
import Contact from './Pages/Contact';
import AboutMe from './Pages/AboutMe'
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
          <Route path='/Scarves' element={<Scarves/>}/>
          <Route path='/Accesories' element={<Accesories/>}/>
          {/* <Route path='/' element={<Customized/>}/> */}
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<AboutMe/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
