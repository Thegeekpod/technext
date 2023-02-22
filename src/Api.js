import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://gorest.co.in/public/v2/posts')
      .then(response => setData(response.data));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Api;
