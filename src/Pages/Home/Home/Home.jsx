import React from 'react';
import Banner from '../Banner/Banner';
import Intro from '../../Intro/Intro';
import Skills from '../../Skills/Skills';
import Projects from '../Projects/Projects';
import Service from '../../Service/Service';
import Message from '../Messgae/Message';

const Home = () => {
    return (
        <div>
            <Banner />
            <Intro />
            <Skills />
            <Projects />
            <Service />
            <Message />
        </div>
    );
};

export default Home;