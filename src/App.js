import logo from './logo.svg';
import './App.css';

import SomeText from './components/example/SomeText/SomeText';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SomeText/>
        <SomeText text="hola"/>
        <SomeText text="mundo"/>
      </header>
    </div>
  );
}

export default App;
