import { graduation, messila, lut, laba } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    python,
    git,
    github,
    html,
    javascript,
    linkedin,
    unity,
    blender,
    nextjs,
    nodejs,
    ridelogo,
    react,
    c,
    csharp,
    food,
    tailwindcss,
    dice,
    typescript,
    figma,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game developement",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "3D Design",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Programming Language",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Bachelor of Engineering in Information and Communication Technology (ICT)",
        company_name: "LAB University of Applied Sciences",
        icon: graduation,
        iconBg: "#EFC84A",
        date: "Jan 2018 - Present",
        points: [
            "Graduated from LAB University of applied sciences with a grade average of 3.7 and a Bachelors thesis of 4.",
            "Spesialized in software developement and game developement.",
            "Also took courses in 3D modeling, Ar technologiesm web developement, game developement and AI developement",
        ],
    },
    {
        title: "Front End Developer",
        company_name: "LUT University",
        icon: lut,
        iconBg: "#accbe1",
        date: "August 2025 - April 2026",
        points: [
            "Developing and maintaining web application using React.js, Next.js and Tailwind.css.",
            "Collaborating with different teams like AR, Backend, Marketing, IMU and AI teams.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Creating own template for the customers for a Ai riding startup company",
        ],
    },
    {
        title: "Professional Basketball Player",
        company_name: "Lahti Basketball",
        icon: laba,
        iconBg: "#F8EDED",
        date: "April 2015 - April 2023",
        points: [
            "Worked as a professional basketball player in Lahti Basketball.",
            "Collaborated with many different teams and personel and fit in any group seamlessly.",
            "Cemented English speaking skills and Collaborating with customers/fans.",
            "Participated in getting Lahti Basketball culture back to the top national level.",
        ],
    },
    {
        title: "Greenskeeper",
        company_name: "Messilä Golf",
        icon: messila,
        iconBg: "#FFA6A6",
        date: "May 2022 - August 2024",
        points: [
            "Worked as a Greenskeeper in Messilä Golf.",
            "Learned efficient working culture and maintaining good relationship with customers.",
            "Worked with alot of machinery and gadgets.",
            "Was in charge of the quality of bunkers while also maintaining the course in other ares such as greens and tee area.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: ridelogo,
        theme: 'btn-back-red',
        name: 'Ai Riding coach web application',
        description: 'Developed a web application that tracks the riders body angles during their riding session. Helps rider and the coach to visualise how they can optimize the riding posture.',
        video: '/videos/airide.mp4',
    },
    {
        iconUrl: dice,
        theme: 'btn-back-green',
        name: 'My own mobile game',
        description: 'Created a mobile game that has wall jump mechanics and attack mechanics were you are supposed to pick up diamonds and scored with each pick. You have also a pause in the game.',
        video: '/videos/mygame.mov',
    },
    {
        iconUrl: food,
        theme: 'btn-back-blue',
        name: 'Food randomizer app',
        description: 'Building an app that randomizes meals for you for the day and then makes a shopping list for the ingredients that you need for you to make those meals. Might be possible to collab with stores and their items so that consumer can use the app to pick a store and use their items. THIS IS IN PROGRESS STILL!',
    },
];