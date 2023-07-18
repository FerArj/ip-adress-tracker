import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tracker from './pages/Tracker';

function app (){
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Tracker/>}/>
      </Routes>
    </Router>
  )
}

export default app