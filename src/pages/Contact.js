import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import config from '../config';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await axios.post(`${config.API_URL}/api/contact`, formData);
      if (response.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Get In Touch
      </motion.h1>
      
      <motion.p 
        className="contact-subtitle"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Have a question or want to work together? Drop me a message!
      </motion.p>

      <motion.form 
        onSubmit={handleSubmit}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>

      {status === 'success' && (
        <motion.p 
          className="status-message success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✓ Message sent successfully!
        </motion.p>
      )}

      {status === 'error' && (
        <motion.p 
          className="status-message error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✗ Failed to send message. Please try again.
        </motion.p>
      )}
    </div>
  );
};

export default Contact;