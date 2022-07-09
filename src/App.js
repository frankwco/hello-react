import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Calculadora from './components/calculadora/Calculadora';

function App() {
  return (
    <div className='Container'>
      <Header nome="Frank"/>
      <Calculadora/>
      <Footer/>
    </div>
  );
}

export default App;
