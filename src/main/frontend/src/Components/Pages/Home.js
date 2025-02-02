import { useEffect, useState } from 'react';
import { API_URL } from "../../config"; // gets the API_URL from the config.js file
import FamousWhispers from "./FamousWhispers";
import Slideshow from "./Slideshow";
import "./App.css"

function Home() {
  const [message, setMessage] = useState(''); // will hold the message from the backend

  // "useEffect" is a React method that will run after this page is loaded
  // it will fetch the message from the backend
  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${API_URL}/hello/personalized`, {
        method: 'POST', // POST request
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first: 'Ensign', last: 'Student' }) // JSON body with attributes for a Person
      });
      const text = await response.text(); // waits for the response and then converts it to text
      setMessage(text); // sets the message with the text from the response
    };
    fetchMessage();
  }, []);

  return (

      <div>
        <h1>Message from the backend:</h1>
        <p>{message}</p>
        <Slideshow/>
        <FamousWhispers/>

      </div>
  );
}

export default Home;
