import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import FlightSearchPage from './pages/FlightSearchPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/flight-search" element={<FlightSearchPage/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
