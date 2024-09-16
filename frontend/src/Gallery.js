// Gallery.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import image1 from './gallery1.jpg'; // Adjust the paths as necessary
import image2 from './gallery2.jpg';
import image3 from './gallery3.webp';

const images = [
  { src: image1, text: 
  <p>
    <h3>The Chain of Health</h3>
    <ul>
      <li>Keep track of your medication streak with visual reminders.</li>
      <li>Every dose counts towards your overall health.</li>
      <li>Visualize the difference in your health with consistent medication.</li>
      <li>Stay motivated by seeing your success in maintaining the chain.</li>
    </ul> 
  </p>},
  { src: image2, text: 
    <p>
      <h3>One Tap to Health</h3>
      <ul>
        <li>Record your medication intake with just a tap.</li>
        <li>Automatically logs time and date for your convenience.</li>
        <li>Easily integrate medication reminders into your daily routine.</li>
      </ul> 
    </p>},
  { src: image3, text: 
    <p>
      <h3>Record Symptoms and Feelings</h3>
      <ul>
        <li>Note changes in your health to share with your doctor or anonymously.</li>
        <li>Capture how you feel before and after medication for a complete picture.</li>
        <li>Document your daily experiences to monitor trends and patterns.</li>
      </ul> 
    </p>},
];

function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery">
      <motion.img
        key={index}
        src={images[index].src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <p>{images[index].text}</p>
    </div>
  );
}

export default Gallery;
