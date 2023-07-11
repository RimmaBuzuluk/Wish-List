
import './App.css';
import LogInto from './page/LogInto';
import Registration from './page/Registration';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Registration/>} />
          <Route path="/logInto" element={<LogInto />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
