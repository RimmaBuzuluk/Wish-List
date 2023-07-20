import './App.css';
import MainTopBorder from './component/MainTopBorder';
import LogInto from './page/LogInto';
import MainPage from './page/MainPage';
import Registration from './page/Registration';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WishInformation from './page/WishInformation';
import SerchUser from './page/SerchUser';

function App() {
  return (
    <div className="App">
      
      <Router>
      <MainTopBorder/>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/logInto" element={<LogInto />} />
          <Route path='/mainPage' element={<MainPage />} />
          <Route path='/wishId/:wishId' element={<WishInformation />} />
          <Route path='/serchPage' element={<SerchUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
