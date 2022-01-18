import './App.css';
import Mainmenu from '../src/Components/Mainmenu/Mainmenu';
import Sidebarmenu from './Components/Sidemenu/Sidebarmenu';
import Trendsmenu from './Components/Trendsmenu/Trendsmenu';

function App() {
  return (
    <div className="App">
      <Sidebarmenu />
      <Mainmenu />
      <Trendsmenu />
    </div>
  );
}

export default App;
