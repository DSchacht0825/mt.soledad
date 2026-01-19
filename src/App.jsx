import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PastoralSearch from './pages/PastoralSearch';
import Ministries from './pages/Ministries';
import Events from './pages/Events';
import Contact from './pages/Contact';
import WhyWeGive from './pages/WhyWeGive';
import Leadership from './pages/Leadership';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/pastoral-search" element={<PastoralSearch />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-we-give" element={<WhyWeGive />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
