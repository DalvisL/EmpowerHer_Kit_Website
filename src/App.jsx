import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmpowerHerKit from './Components/EmpowerHerKit/EmpowerHerKit';
import ToolKitPage from './Components/Pages/Toolkit-Page/EmpowerHerKit/EmpowerHerKit';
import KitPage from './Components/Pages/KitPage/EmpowerHerKit/EmpowerHerKit';
import { useState } from 'react';

// content
import equalPay from './Components/Pages/KitPage/EmpowerHerKit/Content/equalPay';
import family from './Components/Pages/KitPage/EmpowerHerKit/Content/family';
import mentorship from './Components/Pages/KitPage/EmpowerHerKit/Content/mentorship';


function App() {
  const [activeBucket, setActiveBucket] = useState(equalPay);
  const chooseContent = (content) => {
    if (content === 'equalPay') {
      setActiveBucket(equalPay);
    } else if (content === 'family') {
      setActiveBucket(family);
    } else if (content === 'mentorship') {
      setActiveBucket(mentorship);
    }
  };

  
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route exact path="/" element={<EmpowerHerKit />}/>
        <Route path='/Toolkit' element={<ToolKitPage chooseContent={chooseContent}/>}/>
        <Route path='/KitPage' element={<KitPage activeBucket={activeBucket} />}/>
      </Routes>
    </Router>
  );
  }

export default App;