import { useEffect, useState } from 'react';
import { API_URL } from "../config"; // gets the API_URL from the config.js file
import FamousWhispersPage from "./FamousWhispers";
import FullSizeSlideshow from "./FullSizeSlideshow";
import golden from '../Sources/GoldenGate1.jpg';
import Mountains1 from '../Sources/Mountains.MOV';
import Appslide from '../Components/Appslide.js';
import Presentation from '../Components/Presentation';


function App() {
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

    const mediaItems = [
        {
            type: 'image',
            url: golden,
            title: 'Golden Gate Bridge',
            description: 'The iconic Golden Gate Bridge in San Francisco, California.',
        },
        {
            type: 'video',
            url: Mountains1,
            title: 'Mountain Scenery',
            description: 'A breathtaking view of mountains and nature.',
        },

    ];

  return (
      <div>
          <Presentation/>
          <FullSizeSlideshow mediaItems={ mediaItems } />
          <FamousWhispersPage/>
          <Appslide/>

        <h1>Message from the backend:</h1>
        <p>{message}</p>


      </div>
  );
}

export default App;
