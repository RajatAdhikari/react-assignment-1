import './App.css';
import Class from './Component/Class';
import Common from './Component/Common';
import Functional from './Component/Functional';
// import './Component/style.css'
import './Component/style.css'

function App() {
  return (
    <div className="App">
     <Common/>
     <Functional/>
     <Class/>
    </div>
  );
}

export default App;
