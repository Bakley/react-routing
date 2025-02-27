import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; // Direct import
import LandingPage from './components/LandingPage'; // Direct import
import SignupPage from './forms/SignUpPage'; // Direct import
import LoginPage from './forms/LoginPage'; // Direct import
import FormPage from './forms/FormPage'; // Direct import
import ErrorBoundary from './components/ErrorBoundary'; // Import the ErrorBoundary

function App() {
  return (
    <Router>
      <ErrorBoundary> {/* Wrap the entire app with ErrorBoundary */}
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;