import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

function IntroPage() {

    const introAnimation1 = useRef(null)
    const introAnimation2 = useRef(null)
    const introAnimation3 = useRef(null)
    const introAnimation4 = useRef(null)
    const introPage = useRef(null)
    const introSlider = useRef(null)
    const [play, setPlay] = useState(false)

    useEffect(() => {
        gsap.to(introAnimation1.current, {
            duration: 1, 
            y:'0%'
        })
    }, [introAnimation1])

    useEffect(() => {
        gsap.to(introAnimation2.current, {
            duration: 1, 
            y:'0%',
            delay: 1
        })
    }, [introAnimation2])

    useEffect(() => {
        gsap.to(introAnimation3.current, {
            duration: 1, 
            y:'0%',
            delay: 2
        })
    }, [introAnimation3])

    useEffect(() => {
        gsap.from(introAnimation4.current, {
            duration: 4, 
            autoAlpha: 0,
            ease: 'none',
            delay: 4,
        })
    }, [introAnimation4])

    useEffect(() => {
        gsap.to(introPage.current, {
            y: '100%',
            ease: 'power1.out',
            duration: 1,
            delay: 6
        })
    }, [])

    useEffect(() => {
        gsap.to(introSlider.current, {
            y: '200%',
            ease: 'none',
            duration: 0.5,
            delay: 6.5
        })
    }, [])

const timeline = gsap.to({paused: true})
    
// useMemo(() => gsap.to({paused: true}), []);
    // play this onClick
    useEffect(() => {
        // if this happends
        if (play) {
            // 
        timeline.play()
        }
    })

    return (
        <div ref={introPage} className='intro-page'>
            <div className='intro-logo'><img src='/images/magimug-flower.png' alt='aaaaa'/></div>
            <div className='intro-text'>
                <h1 className='hide-text'>
                <span ref={introAnimation1} className='text'>Crisp design</span>
                </h1>
                <h1 className='hide-text'>
                <span ref={introAnimation2} className='text'>Excellent service</span>
                </h1>
                <h1 className='hide-text'>
                <span ref={introAnimation3} className='text'>pretty cheap.</span>
                </h1>
            <button href={introAnimation4} onClick={() => setPlay(!play)}>
            Enter </button>
            </div>
<div ref={introSlider} className='slider'></div>
        </div>
    )
}

export default IntroPage


