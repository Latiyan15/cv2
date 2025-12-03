import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CampusAmbassadors from './pages/CampusAmbassadors';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campus-ambassadors" element={<CampusAmbassadors />} />
      </Routes>
    </Router>
  );
};

export default App;
