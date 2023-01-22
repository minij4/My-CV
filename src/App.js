import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import Header from "./components/Header";
import Section from "./components/Section";
import Logo from "./components/Logo";
import Social from "./components/Social";
import BGLight from './components/BGLight';

// Data
import dataForLogos from "./logos-data";
import dataForSections from "./sections-data.js";


export default function App() {

    const sections = dataForSections.map(section => {
        return <Section
            {...section}
        />
    })

    const logos = dataForLogos.map(logo => {
        return <Logo
            {...logo}
        />
    })

    return (
        <div className="main">
            <BGLight class="bg-purple"/>
            <BGLight class="bg-pink"/>
            <Header />

            {sections}

            <div className='logos'>
                {logos}
            </div>

            <Social
                title="Are You interested?"
                text="Let me bring your ideas to life!"
            />

            <p className="credit">© 2023 Minija development. All rights reserved.</p>
        </div>
    );
}
