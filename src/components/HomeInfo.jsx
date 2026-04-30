import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow}  className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am <span className='font-semibold'>Roi</span> 👋
        <br/>
        A Software Engineer And This Is My Portfolio
        <br/>
        You can Rotate the island to learn more about me and you can also see my projects and contact me!
        </h1>
    ),
    2: (
        <InfoBox
            text="Graduated 2026 as a Bachelor of Information and Communication Techology and developed many skills along the way"
            link="/about"
            btnText="Learn more about me"
        />
    ),
    3: (
        <InfoBox
            text="Here are some of my projects that i have made during my years"
            link="/projects"
            btnText="See more"
        />
    ),
    4: (
        <InfoBox
            text="If you are interested you can contact me here! 📱" 
            link="/contact"
            btnText="Contact information"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo