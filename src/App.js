import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';

function App() {
  return (
    <div className="App">
      <Header className="header" name="gokul" color="purple" >
        
      </Header>

      <Main name='john' age='23'></Main>

      <Sidebar name='octa' color='black'></Sidebar>

      <Btn></Btn>

      <ModeToggler></ModeToggler>
    </div>
  );
}

export default App;
