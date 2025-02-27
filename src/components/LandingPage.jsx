import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          Welcome to MyApp
        </h1>
        <p className="text-xl mb-8 animate-fade-in-up">
          Discover amazing features and join our community today!
        </p>
        <Link
          to="/signup"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 animate-bounce"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;