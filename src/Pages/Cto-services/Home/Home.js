import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomeTop from '../HomeTop/HomeTop';
import InputField from '../InputField/InputField';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <HomeTop></HomeTop>
            <About></About>
            <Service></Service>
            <InputField></InputField>
            <Contact></Contact>
        </div>
    );
};

export default Home;