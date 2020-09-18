import React, { useEffect, useState } from 'react';

const Me = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('./aboutme.json')
      .then(res => res.json())
      .then(res => setMessage(res.description));
  });


  useEffect(() => {
    fetch('./aboutme.json')
      .then(res => res.json())
      .then(res => setName(res.name))
  });

  return (
      <div className="content">
      <h2>About me</h2>
      <p>{name}</p>
      <p>{message}</p>
      </div>
  );
};

export default Me;