import './App.css';
import MainTopBorder from './component/MainTopBorder';
import LogInto from './page/LogInto';
import MainPage from './page/MainPage';
import Registration from './page/Registration';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WishInformation from './page/WishInformation';
import SearchUser from './page/SearchUser';


function App() {

  
  return (
    <div className="App">
      
      <Router>
      <MainTopBorder/>
        <Routes>
          <Route path="/" element={<Registration />} key="Registration"/>
          <Route path="/logInto" element={<LogInto />} key="logInto"/>
          <Route path='/mainPage' element={<MainPage />} key="mainPage"/>
          <Route path='/wishId/:wishId' element={<WishInformation />} key="wishInformation" />
          <Route path='/searchPage' element={<SearchUser/>} key="searchUer"/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
