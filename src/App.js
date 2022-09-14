import logo from './logo.svg';
import SideBar from './components/SideBar';
import Home from './components/Home';
import AllRoutes from './AllRoutes/AllRoutes';

function App() {
  return (
    <>
    <div className="App">
       <SideBar/>
        <div className="content">
         <AllRoutes/>
        </div>
    </div>
    </>
  );
}

export default App;
