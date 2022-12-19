import logo from '../images/logo.svg';
import '../styles/App.scss';
import Header from './Header';
import Home from './home/Home';




function App() {
  return (
   <>
   <Header/>

   <main className='main'>
    <Home/>
   </main>
   </>
  );
}



export default App;
