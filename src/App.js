
import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm'

function App() {
  return (
    <>
      <Navbar title="Textutils"/>
      <div className="container my-3">
      {/* <TextForm heading="Enter Text to analyze blow"/> */}
      <About></About>
      </div>
    </>
  );
}

export default App;
