import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Background from './components/Background';
const App = () => {
  return (

    <div className='AppWrapper'>
      <Background></Background>
      <div className='App'>
        <Header></Header>
        <MainContent></MainContent>
      </div>
    </div>

  );
}

export default App;
