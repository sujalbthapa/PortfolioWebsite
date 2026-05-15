import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollProgress from './components/layout/ScrollProgress';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollProgress />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
