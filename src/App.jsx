import MySvgElement from "./components/MySvgElement";
import Smily from "./components/Smily.svg";


function App() {
  return (
    <div className="App" style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', height:'100svh'}} >
      <MySvgElement />
      <Smily />
    </div>
  );
}

export default App;
