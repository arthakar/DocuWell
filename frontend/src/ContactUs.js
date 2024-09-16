import React from 'react';
import './ContactUs.css';

// Import images from assets folder
import image1 from './assets/DocuWellProfilePic-AryanThakar.png';
import image2 from './assets/DocuWellProfilePic-ChayanikaSinha.jpeg';
import image3 from './assets/DocuWellProfilePic-RohanTadisetty.jpeg';

function ContactUs() {
   return (
      <div className="contact-container">
         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"></link>
         <div className="content-container">
            <h1 className="contact-title">Contact Us</h1>
            <div className="image-container">
               <div className="image-item">
                  <img src={image1} alt="Aryan Thakar" className="contact-image"/>
                  <p className="image-name">Aryan Thakar</p>
               </div>
               <div className="image-item">
                  <img src={image2} alt="Chayanika Sinha" className="contact-image"/>
                  <p className="image-name">Chayanika Sinha</p>
               </div>
               <div className="image-item">
                  <img src={image3} alt="Rohan Tadisetty" className="contact-image"/>
                  <p className="image-name">Rohan Tadisetty</p>
               </div>
            </div>
            <p>Phone: (123) 456-7890</p>
         </div>
      </div>
   );
}

export default ContactUs;
