import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmpowerHerKit from './Components/EmpowerHerKit/EmpowerHerKit';
import BuilderPage from './builder-page';
import ToolKitPage from './Components/Pages/Toolkit-Page/EmpowerHerKit/EmpowerHerKit';
import KitPage from './Components/Pages/KitPage/EmpowerHerKit/EmpowerHerKit';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/Home" element={<EmpowerHerKit/>}/>
        <Route exact path="/" element={<BuilderPage/>}/>
        <Route path='/Toolkit' element={<ToolKitPage/>}/>
        <Route path='/KitPage' element={<KitPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;