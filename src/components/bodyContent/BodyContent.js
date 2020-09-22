import React from 'react';
import './BodyContent.css';

function BodyContent() {
    return (
        <body className="body-container">
            <div id='wrapper' className="body-content">
                <h1 className='landing-text'>Köpa hemsida?</h1>
                <p>Vi är en kreativ, lite personligare webbyrå.</p>
            </div>
            <div className='bubbles'>
            <img alt='bubbles' src='images/bubble.png' />
            <img alt='bubbles' src='images/bubble.png' />
            <img alt='bubbles' src='images/bubble.png' />
            <img alt='bubbles' src='images/bubble.png' />
            <img alt='bubbles' src='images/bubble.png' />
            <img alt='bubbles' src='images/bubble.png' />
            <img alt='bubbles' src='images/bubble.png' />
            <img alt='bubbles' src='images/bubble.png' />
            </div>
        </body>
    )
}

export default BodyContent;