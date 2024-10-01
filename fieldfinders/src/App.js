import { useState, useEffect } from 'react';

export default function Fetch(){
  console.log('fetch!')
  const [fields, setFields] = useState([]);
  useEffect(() => {
    let url = "http://127.0.0.1:5000/api/v1/resources/features/all"
    fetch(url)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
      })
      .catch(error => console.log(error))
  })
}