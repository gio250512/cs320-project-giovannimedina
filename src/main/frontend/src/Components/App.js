import { useEffect, useState } from 'react';
import { API_URL } from "../config"; // gets the API_URL from the config.js file
import FamousWhispersPage from "./FamousWhispers";
import FullSizeSlideshow from "./FullSizeSlideshow";
import Appslide from './Appslide';
import Card from './Card';
import { UserRegistrationForm } from './UserRegistrationForm';

import golden from '../Sources/GoldenGate1.jpg';
import Mountains1 from '../Sources/Mountains.MOV';
import guirardelli from '../Sources/guirardelli.jpg';
import Joseph from '../Sources/Joseph.JPEG';
import Oregon1 from '../Sources/Oregon1.JPEG';
import Portland from '../Sources/Portland.JPEG';
import Portland3 from '../Sources/Portland3.JPEG';
import Riverside from '../Sources/Riverside.jpg';
import WoFLA from '../Sources/WoFLA.jpg';
import CanonBeach from '../Sources/CanonBeach1.JPEG';
import CanonBeach1 from '../Sources/CanonBeach1.MP4';




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
        {
            type: 'image',
            url: guirardelli,
            title: 'Guirardelli chocolate factory',
            description: 'A iconic place of San Francisco Bay',
        },
        {
            type: 'image',
            url: Joseph,
            title: 'Wildland Garderns Glamping',
            description: 'A unique glamping experience amidst serene nature.',
        },
        {
            type: 'image',
            url: Oregon1,
            title: 'Vista House at Crown Point',
            description: 'A historic observatory with panoramic views of the Columbia River Gorge.',
        },
        {
            type: 'image',
            url: Portland,
            title: 'Steel Bridge',
            description: 'A vital and historic lift bridge in Portland, Oregon.',
        },
        {
            type: 'image',
            url: Portland3,
            title: 'Multnomah Falls, Oregon',
            description: 'One of Oregons tallest and most picturesque waterfalls.',
        },
        {
            type: 'image',
            url: CanonBeach,
            title: 'Canon Beach, Oregon',
            description: 'A charming coastal city known for its beautiful sandy shores.',
        },
        {
            type: 'video',
            url: CanonBeach1,
            title: 'Haystack Rock, Canon Beach',
            description: 'A monumental rock formation and iconic landmark on Cannon Beach.',
        },

        {
            type: 'image',
            url: Riverside,
            title: 'Fox Performing Arts Center, Riverside',
            description: 'A historic theater and premier venue for live performances.',
        },
        {
            type: 'image',
            url: WoFLA,
            title: 'Walk of fame, Los Angeles',
            description: 'A famous sidewalk celebrating stars of the entertainment industry.',
        },


    ];

  return (
      <div>
          <Card/>
          <FullSizeSlideshow mediaItems={ mediaItems } />
          <FamousWhispersPage/>
          <Appslide/>
          <UserRegistrationForm/>


        <h1>Message from the backend:</h1>
        <p>{message}</p>


      </div>
  );
}

export default App;
