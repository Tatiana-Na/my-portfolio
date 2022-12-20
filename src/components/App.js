import logo from '../images/logo.svg';
import '../styles/App.scss';
import Header from './Header';
import Home from './home/Home';
import About from './about/About';
import Skills from './skills/Skills';




function App() {
  return (
   <>
   <Header/>

   <main className='main'>
    <Home />
    <About />
    <Skills />
   </main>
   </>
  );
}



export default App;
