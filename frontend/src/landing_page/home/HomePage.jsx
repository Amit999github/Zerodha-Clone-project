import React from 'react'
import HeroSection from './HeroSection';
import Awards from './Awards';
import State from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../../OpenAccount'


function HomePage() {
    return ( 
        <>
        <HeroSection/>
        <Awards/>
        <State/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;