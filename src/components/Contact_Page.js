import React from 'react';
import './ContactPage.css'; // Assuming you have a CSS file for styling

function ContactUsPage() {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have a question about dog care or just want to say hello, feel free to drop us a message.</p>

      <div className="contact-form">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="additional-info">
        <h2>Other Ways to Reach Us</h2>
        <p><strong>Address:</strong> 123 Doggo Street, Petville, USA</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> contact@doglovershaven.com</p>
      </div>
    </div>
  );
}

export default ContactUsPage;
