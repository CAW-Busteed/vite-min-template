import React from 'react';

interface AboutProps {
    title: string;
    text: string;
}

const About: React.FC<AboutProps> = ({ title, text }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default About;
