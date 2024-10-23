import { useState, useEffect} from 'react';
import React from 'react';


import SimpleMap from './components/SimpleMap.jsx'


function App() {
	const [features, setFeatures] = useState([])
	const [searchInput, setSearchInput] = useState('')

	// useEffect(() => { 
	// 	console.log("Mounted");
	// 	getFacilities()
	// },[]);



	async function getFacilities(){
		await fetch(`http://127.0.0.1:5000/api/v1/resources/features/${searchInput}`)
			.then((response) => response.json())
	  		.then((data) => {
	    	setFeatures(data);
	  })
	  .catch((error) => {
			console.error('Error fetching data:', error);
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
        <label htmlFor="parks">Choose a park feature:</label>

				<select name="parks" id="pars" onChange={(e) => setSearchInput(e.target.value)}>
				  <option value="basketball">Basketball</option>
				  <option value="skate">Skateboard</option>
				  <option value="boat">Boat Launch</option>
				  <option value="cricket">Cricket</option>
				  <option value="rugby">Rugby</option>
				  <option value="soccer">Soccer</option>
				  <option value="football">Football</option>
				  <option value="tennis">Tennis Court</option>
				</select>
          
          <button type="submit">
                Explore!
           </button>
        </form>
      </div>

	     <SimpleMap features={features}/>
	     </div>
    </div>
	    );
	  
}




export default App;