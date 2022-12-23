import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'

function App() {
  return (
    <>
    <div className=''>
      <Navbar title="Textutils"/>
      <div className="container">
        <TextForm title="Enter the text to analyse:"/>
        {/* <About/> */}
      </div>
    </div>
    
    </>
      
  );
}

export default App;
