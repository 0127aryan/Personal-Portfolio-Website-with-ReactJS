import {
    mobile,
    backend,
    cinkod,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    // figma,
    // docker,
    //meta,
    //starbucks,
    //tesla,
    //shopify,
    //carrent,
    //jobit,
    //tripguide,
    threejs,
    deployment_link,
    github,
    vercel,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    // {
    //   id: "resume", //add resume pdf in components
    //   title: "Resume",
    // }
  ];
  
  const services = [
    {
      title: "Mern Stack Developer",
      icon: web,
    },
    {
      title: "Android Application Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "Community Manager",
      company_name: "Cinkod Technologies Pvt. Ltd",
      icon: cinkod,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Ensure initiatives align with Cinkods vision and board decisions, fostering collaboration and inclusivity. Develop and execute strategies for community growth and expansion across India.",
        "Leading the community management team to build and maintain a vibrant online community for a global car rental company.",
  ],
}
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    //},
    
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://media.licdn.com/dms/image/D5603AQElsM-i3mqWsg/profile-displayphoto-shrink_800_800/0/1720179121199?e=1725494400&v=beta&t=3PkvVbMmpw2X7UiZUVaEQQ1VNxrZveuN1hmMGwUVdLY",
    // },
    
  ];
  
  const projects = [
    {
      name: "Expense Tracker",
      description: "Developed a scalable expense tracker with Node.js, Express.js, JWT authentication, and MongoDB, achieving a 30% response time improvement after cloud deployment. Included user-friendly categorization and collaborated via GitHub.",
      tags : [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        // {
        //   name: "jwt",
        //   color: "purple-text-gradient",
        // },
      ],
      image: github,
      
      source_code_link: "https://github.com/0127aryan/Expense_tracker_pro",
      
      deployment_link: 'https://expense-tracker-pro-1-h6dy.onrender.com'
    },
    // {
    //   name: "Car Rent",
    //   description:
    //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/",
    // },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };