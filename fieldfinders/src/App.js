import { useState, useEffect } from 'react';

export default function Fetch(){
  console.log('fetch!')
  const [fields, setFields] = useState([]);
  useEffect(() => {
    let url = "http://127.0.0.1:5000/api/v1/resources/features/all"
    const response = fetch(url)
    console.log(response)
  })
}