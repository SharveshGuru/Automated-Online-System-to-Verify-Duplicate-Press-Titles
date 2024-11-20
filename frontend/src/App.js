import React, { useState } from 'react';
import './App.css'; // Assuming you add the CSS file here.

const App = () => {
  const [title, setTitle] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/verify-title/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    const data = await response.json();
    setResult(data);
    console.log(data);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Title Verification</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter newspaper title"
          />
          <button type="submit">Verify</button>
        </form>

        {result && (
          <div className={`result ${result.status === 'Accepted' ? 'accepted' : 'rejected'}`}>
            <p>{result.reason}</p>
            <p>Verification Probability: {result.probability.toFixed(2)}</p>
            <p>Status: {result.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
