import { useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import SimpleMap from './components/SimpleMap.jsx'


function App() {
	const [features, setFeatures] = useState([])
	const [searchInput, setSearchInput] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	async function getFacilities(){
		setErrorMessage('')

		await axios.get(`http://127.0.0.1:5000/api/v1/resources/features/${searchInput}`)
			.then((response) => {
				if('data' in response){
		    	setFeatures(response.data);

				}
	  })
	  .catch((error) => {
			console.error('Error fetching data:', error);
			setErrorMessage('Something went wrong')
	  });
	}

	function handleSubmit(e){
		e.preventDefault()
		getFacilities()
	}
	 
	    
	return (
	   <div className="content">

	   	<header>
        <h1>Seattle Field Finders </h1>
      </header>
       <div className="container">
      <div >
        <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a City" onChange={(e) => setSearchInput(e.target.value) } ></input>
          
          <button type="submit">
                Explore!
           </button>
           <span>Results: {features.length}</span>
           
           <p className="error-message" style={ {'minHeight': '1.2em', color: 'red'}}>{errorMessage}</p>
           
        </form>
      </div>

	     <SimpleMap features={features}/>
	     </div>
    </div>
	    );
	  
}




export default App;