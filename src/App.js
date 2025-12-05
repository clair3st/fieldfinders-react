import './App.css';

import { useState } from 'react';
import axios from 'axios';
import SimpleMap from './components/SimpleMap.jsx';

const API_BASE_URL = 'https://clair3st.pythonanywhere.com/features';

function App() {
  const [features, setFeatures] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function getFacilities() {
    if (!searchInput.trim()) {
      setErrorMessage('Please enter a sport');
      return;
    }

    setErrorMessage('');

    try {
      const response = await axios.get(`${API_BASE_URL}/${searchInput}`);
      setFeatures(response.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Something went wrong. Please try again.');
      setFeatures([]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getFacilities();
  }

  const errorMessageStyle = {
    minHeight: '1.2em',
    color: 'red'
  };

  return (
    <div className="content">
      <header>
        <div className="logo"></div>
        <h1>Seattle Field Finders</h1>
      </header>
      <div className="container">
        <div className="form-container">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="search">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Enter a Sport"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <span>Results: {features.length}</span>
            </div>
            <p className="error-message" style={errorMessageStyle}>
              {errorMessage}
            </p>
          </form>
        </div>
        <div className="map-container">
          <SimpleMap features={features} />
        </div>
      </div>
    </div>
  );
}




export default App;
