import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FaQrcode } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary-700">
          <img src="/qr-code.svg" alt="Logo" className="w-7 h-7" />
          QRGen Pro
        </Link>
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-primary-600">Home</Link>
          <Link to="/about" className="hover:text-primary-600">About</Link>
          <Link to="/contact" className="hover:text-primary-600">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-primary-600">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary-600">Terms</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t mt-12 py-6 text-center text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <div>&copy; {new Date().getFullYear()} QRGen Pro. All rights reserved.</div>
        <div className="space-x-4 mt-2 sm:mt-0">
          <Link to="/privacy-policy" className="hover:text-primary-600">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary-600">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App; 