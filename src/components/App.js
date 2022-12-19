import logo from '../images/logo.svg';
import '../styles/App.scss';
import Header from './Header';
import Home from './home/Home';
import About from './about/About';




function App() {
  return (
   <>
   <Header/>

   <main className='main'>
    <Home />
    <About />
   </main>
   </>
  );
}



export default App;
