import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Rates from './pages/Rates.jsx';
import Fleet from './pages/Fleet.jsx';
import Airport from './pages/Airport.jsx';
import HowToBook from './pages/HowToBook.jsx';
import Contact from './pages/Contact.jsx';

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rates" element={<Rates />} />
          <Route path="fleet" element={<Fleet />} />
          <Route path="airport-transfers" element={<Airport />} />
          <Route path="how-to-book" element={<HowToBook />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
