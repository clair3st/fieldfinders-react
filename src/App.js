import './App.css';

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

		await axios.get(`https://clair3st.pythonanywhere.com/features/${searchInput}`)
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
	   		<div className="logo"></div>
        <h1>Seattle Field Finders </h1>
      </header>
       <div className="container">
      		<div className="form-container">
		        <form className="search-form" onSubmit={handleSubmit}>
		        	<div className="row">
						   	<div className="search">
						      <input type="text" className="search-input" placeholder="Enter a Sport" onChange={(e) => setSearchInput(e.target.value) }></input>
						      <button type="submit">
						        <i className="fa fa-search"></i>
						     	</button>
						  
								</div>
		           	<span>Results: {features.length}</span>
		       
		           </div>
		           <p className="error-message" style={ {'minHeight': '1.2em', color: 'red'}}>{errorMessage}</p>
		           
		        </form>
      		</div>
      		<div className="map-container">
	     			<SimpleMap features={features}/>
	     		</div>
	     </div>
    </div>
	    );
	  
}




export default App;