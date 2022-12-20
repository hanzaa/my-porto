import NavBar from './components//NavBar';
import JumboTron from './components/JumboTron';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Profile from './components/Profile';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element=
        {
          <>
          <NavBar/>
          <JumboTron/>
          <About/>
          <Profile/>
          <Projects/>
          <Contact/>
          <Footer/>
          </>}> </Route>
          
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
