import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Home</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Welcome Back!</h3>
          <p>This is your personal space to explore features.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Quick Actions</h3>
          <Link to="/form" className="text-blue-600 hover:underline">Fill out a form</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage