import logo from './logo.svg';
import './App.css';
import IncreaseDecrease from './component/IncreaceDecrease';
import LoginLogout from './component/LoginLogout';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   <h3>  HELLO WORLD</h3>
      </header>
      <IncreaseDecrease/>
      <LoginLogout/>
    </div>
  );
}
export default App;
