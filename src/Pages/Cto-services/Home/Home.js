import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomeTop from '../HomeTop/HomeTop';

const Home = () => {
    return (
        <div>
            <HomeTop></HomeTop>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;