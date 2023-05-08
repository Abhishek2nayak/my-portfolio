import Navbar from "./components/Navbar/Navbar";
import './main.css'
import { BrowserRouter,Route,Link , Router, Routes} from "react-router-dom";
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
function App() {
  return (
    <>
    <main className="main">
     <BrowserRouter>
     <Routes>
   
     <Route exact path= '/' element={<Home/>} ></Route>
     <Route exact path= '/about' element={<About/>} ></Route>
     <Route exact path= '/skills' element={<Skills/>} ></Route>
     <Route exact path= '/projects' element={<Projects/>} ></Route>
     <Route exact path= '/contact' element={<Contact/>} ></Route>
     
     </Routes>
     
     
     </BrowserRouter>
    
      </main>
      <Navbar/>
    </>
    
  );
}

export default App;
