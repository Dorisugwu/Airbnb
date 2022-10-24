import './App.css';
import Listing from "./Components/Listing"
import  Navbar  from "./Components/Navbar"
import Icons from "./Components/Icons"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Icons/>
      <Listing/>
    </div>
  );
}

export default App;
