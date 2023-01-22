import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./sections-data.js";


export default function App() {

    const sections = data.map(section => {
        return <Section 
            {...section}
        />
    })

    return (
        <div className="main">
            <Header />
            {sections}
        </div>
    );
}
