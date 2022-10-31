import './App.css'
import RightSide from './components/rightSide/RightSide';
import Sidebar from './components/sidebar/Sidebar';
//import Layout from './layout/Layout';
import MainDash from './pages/mainDash/MainDash';

function App() {
  return (
    <div className="App">
    <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;