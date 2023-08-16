import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/contact-styles/contact-main.scss";
import Model from '../GUI/Model';

const ContactForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
    // simulate a delay (add email sending back)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSending(false);
      setIsSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSending(false);
    }
  };

  const handleCancel = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div className="contact-form-container">
      <div className='space'>
        <div>
          <h1>Have any questions or concerns?</h1>
         <h2>Feel free to contact me!</h2>
         <p>Working as much as I can with my clients is my only concern and that usually can get pretty busy. Especially when you are making memories that will last a life time! So I will try to get to you as soon as I am able to!</p>
         <h5>*Contact can take up to 5 - 7 buisness days.*</h5>
        </div>
      </div>
      {isSent ? (
        <Model onClose={handleGoBack}>
        <div className="success-message">
          <h4>Thank you for your message! We'll get back to you soon.</h4>
          <button className="back-button" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
        </Model>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group-message">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="form-group-buttons">
            <button type="submit" className={`submit-button ${isSending ? 'sending' : ''}`} disabled={isSending}>
              {isSending ? 'Sending...' : 'Send'}
            </button>
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
