import { Routes, Route } from 'react-router-dom';
import './i18n';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Interests from './pages/Interests.jsx';
import Docs from './pages/Docs.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
