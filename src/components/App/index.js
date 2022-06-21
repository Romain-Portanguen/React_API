import { Routes, Route } from 'react-router-dom';

import Header from 'src/components/Header/Index';
import SearchPage from 'src/components/Pages/SearchPage';
import FaqPage from 'src/components/Pages/FaqPage';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </div>
  );
}

export default App;
