import React, { useState, useEffect } from 'react';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImageUrl(data.message);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching dog image:', error));
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
