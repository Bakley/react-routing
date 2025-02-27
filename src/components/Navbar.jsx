import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: '/', label: 'Landing' },
    { path: '/signup', label: 'Signup' },
    { path: '/login', label: 'Login' },
    { path: '/home', label: 'Home' },
    { path: '/form', label: 'Form' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200 transition duration-300">
          MyApp
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative text-white px-4 py-2 rounded-md transition duration-300 ${
                location.pathname === path ? 'bg-white text-blue-600' : 'hover:text-blue-200'
              }`}
            >
              {label}
              {location.pathname === path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="md:hidden bg-blue-700 p-4 flex flex-col items-center space-y-3"
        >
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block text-white text-center py-2 transition duration-300 ${
                location.pathname === path ? 'font-bold bg-white text-blue-600 rounded-lg' : 'hover:text-blue-300'
              }`}
            >
              {label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;