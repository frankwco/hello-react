import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Calculadora from './components/calculadora/Calculadora';
import CalculadoraFunction from './components/calculadora-function/CalculadoraFunction';

function App() {
  return (
    <div className='Container'>
      <Header nome="Frank"/>
      <Calculadora/>
      <CalculadoraFunction/>
      <Footer/>
    </div>
  );
}

export default App;
