import { BrowserRouter, Routes, Route } from 'react-router';
import LandingPage from '@/routes/landingPage';
import './index.css';
import Signup from './routes/signup/signupPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
