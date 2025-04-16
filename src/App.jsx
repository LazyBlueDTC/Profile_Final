import React, { useEffect, useState } from 'react';
import MoreMe from './components/MoreMe.jsx';
import ContactMe from './components/ContactMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import Start from './components/Start.jsx';
import './App.css';
import { setupNavigation } from './main.js';

function App() {
    const [currentSection, setCurrentSection] = useState('home'); 

    useEffect(() => {
        setupNavigation(setCurrentSection); 
    }, []);

    return (
        <div>
            <div >
                <nav className='navbar'>
                    <ul id="nav-links" className='navbar_links'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#more">More on Me</a></li>
                    </ul>
                </nav>
            </div>

            <div>
              {currentSection === 'home' && (
                  <section id="home">
                      <Start />
                  </section>
              )}
              {currentSection === 'portfolio' && (
                  <section id="portfolio">
                      <Portfolio />
                  </section>
              )}
              {currentSection === 'contact' && (
                  <section id="contact">
                      <ContactMe />
                  </section>
              )}
              {currentSection === 'more' && (
                  <section id="more">
                      <MoreMe />
                  </section>
              )}
            </div>

            <div className='footers'>
                <p>Made in Baguio, Philippines</p>
                <p>@2025 Luke Borras</p>
            </div>
        </div>
    );
}

export default App;