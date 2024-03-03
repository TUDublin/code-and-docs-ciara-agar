import React from 'react';
import './AboutPage.css'; // Assuming you have a CSS file for styling

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Paws & Play</h1> {/* Change the title to match your website's name */}

      <section className="intro">
        <h2>Welcome to Paws & Play!</h2>
        <p>
          Paws & Play is a website dedicated to dog lovers worldwide. Here, we share insights, tips, 
          and stories about our four-legged friends. Whether you're a new dog owner or a seasoned 
          canine enthusiast, there's something here for everyone!
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a supportive community for dog owners. We strive to provide 
          valuable information, including health tips, training guides, and nutrition advice, 
          to help your furry friends lead happy, healthy lives.
        </p>
      </section>

      <section className="background">
        <h2>Our Story</h2>
        <p>
          Founded in 2022 by a group of dog enthusiasts and professional trainers, Paws & Play 
          began as a small blog. Today, it's grown into a thriving online resource with a diverse 
          team of writers, veterinarians, and dog experts.
        </p>
      </section>

      {/* You can add more sections as needed */}
    </div>
  );
}

export default AboutPage;
