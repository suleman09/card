
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FaqPage from './pages/FaqPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutUsPage />}/>
      <Route path='/faq' element={<FaqPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
