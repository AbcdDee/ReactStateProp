import logo from './logo.svg';
import './App.css';
import IncreaseDecrease from './component/IncreaceDecrease';
import LoginLogout from './component/LoginLogout';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
   {/* <h3>  HELLO WORLD</h3> */}

   <div class="container">
        <div class="header">
            <h1>React JS</h1>
        <img src={logo} className="App-logo" alt="logo" />
            <i class="fab fa-react icon"></i>
        </div>
        <div class="footer">
            Hello World
        </div>
    </div>
   
      {/* </header> */}
      <IncreaseDecrease/>
      <LoginLogout/>
    </div>
  );
}
export default App;
