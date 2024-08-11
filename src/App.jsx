import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmpowerHerKit from './Components/EmpowerHerKit/EmpowerHerKit';
import BuilderPage from './builder-page';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/Home" element={<EmpowerHerKit/>}/>
        <Route exact path="/" element={<BuilderPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;