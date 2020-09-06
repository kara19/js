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
    <main>
      <h1>About me</h1>
      <p>{name}</p>
      <p>{message}</p>
    </main>
  );
};

export default Me;