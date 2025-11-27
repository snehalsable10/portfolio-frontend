import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <span className="highlight">Snehal Sable</span>
        </motion.h1>
        
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack MERN Developer
        </motion.h2>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Building scalable web applications with modern technologies
        </motion.p>
        
        <motion.div 
          className="skills"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="skill-tag">React</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">MongoDB</span>
          <span className="skill-tag">Express</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">REST APIs</span>
        </motion.div>
        
        <motion.div 
          className="cta-buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="https://github.com/snehalsable10" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/snehal-sable" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;