function FormPage() {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
    };
  
    return (
      <div className="container mx-auto mt-10 max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Information</h2>
        <form className="space-y-4 bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1">Full Name</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea 
              className="w-full p-2 border rounded h-32"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1">Category</label>
            <select className="w-full p-2 border rounded">
              <option>General</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  export default FormPage