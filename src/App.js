import logo from './logo.svg';
import SideBar from './components/SideBar';
import Home from './components/Home';

function App() {
  return (
    <>
    <div className="App">
       <SideBar/>
        <div className="content">
          <Home/>
        </div>
    </div>
    </>
  );
}

export default App;
