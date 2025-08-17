import { BrowserRouter, Routes, Route } from 'react-router';
import LandingPage from '@/routes/landingPage';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
