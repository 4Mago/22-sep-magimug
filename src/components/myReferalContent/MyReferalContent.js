import React from 'react'
import './MyReferalContent.css'

function MyReferalContent() {
    return (
        <div id='ripple' className='container'>
            <h2>Referal projects</h2>
            <div className='referal-content'>
                <div className='box'>
                <a href='https://nautiskaklubben.se/wordpress' className='nautiska'>
                    <img alt='the logo of magimug web development' src='/images/Nautiska.png' />
                </a>
                <p>For Nautiska Klubben I created a complete webpage with an extensive membership interface using Wordpress</p>
                </div>
                <div className='box'>
                <a href='https://cocky-joliot-ad6a07.netlify.app/' className='Waxanime'>
                    <img alt='the logo of magimug web development' src='/images/Waxanime.png' />
                </a>
                <p>I created a complete webpage with an extensive login page using Wordpress</p>
                </div>
                <div className='box'>
                <a href='https://nautiskaklubben.se/wordpress' className='paulinaeile'>
                    <img alt='the logo of magimug web development' src='/images/Waxanime.png' />
                </a>
                <p>I created a complete webpage with an extensive login page using Wordpress</p>
                </div>
            </div>
    </div>
    )
}

export default MyReferalContent
