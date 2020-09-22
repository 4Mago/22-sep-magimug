import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Bubbles() {
    return (
        <div className='foot'>
            <div className='contact-info'>
                <ul>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
                <div className='logo'>
                <Link to='#' className='navbar-footer'>
                         <img alt='the logo of magimug web development' src='/images/magimug-flower.png' />
                     </Link>
                </div>
            </div>
        </div>
    )
}

export default Bubbles
