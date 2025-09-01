import { BrowserRouter, Routes, Route } from 'react-router';
import LandingPage from '@/routes/landingPage';
import './index.css';
import AuthPage from './routes/authPage/authPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
