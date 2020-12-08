import './App.css';
import Header from './components/header/Header';
import CustomerContainer from './components/body/customerContainer/CustomerContainer';
import GetInTouch from './components/body/getInTouch/GetInTouch';
import ServicesAndOfferings from './components/body/servicesAndOfferings/ServicesAndOfferings';
import About from './components/body/about/About';
import Footer from './components/footer/Footer';
import CustomersOpinion from './components/body/customersOpinion/CustomersOpinion';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
      <CustomerContainer/>
      <ServicesAndOfferings/>
      <About/>
      <GetInTouch/>
      <CustomersOpinion/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
