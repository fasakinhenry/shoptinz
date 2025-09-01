import { BrowserRouter, Routes, Route } from 'react-router';
import LandingPage from '@/routes/landingPage';
import './index.css';
import Signup from './routes/signup/signupPage';
import Signin from './routes/signin/signinPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
