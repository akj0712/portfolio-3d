import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  bootstrap,
  redux,
  tailwind,
  nodejs,
  expressjs,
  mongodb,
  git,
  figma,
  docker,
  hashedinbydelloite,
  motorola,
  netflix,
  booking,
  darksky,
  threejs,
  postman,
  cplusplus,
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
    id: "blog",
    title: "Blog",
    link: "https://abhinavjha07.hashnode.dev/",
  },
  {
    id: "resume",
    title: "Resume",
    link: "https://drive.google.com/file/d/10Ny4ivSXHg6gzhziLSeN1PNXC_v0vHF0/view?usp=drive_link",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical Writer",
    icon: creator,
  },
];

const technologies = [
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "C Plus Plus",
    icon: cplusplus,
  },
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Hashedin By Delloite",
    icon: hashedinbydelloite,
    iconBg: "#383E56",
    date: "April 2024 - July 2024",
    points: [
      "Engineering industry ready applications while delivering customer delight in a fast-paced learning environment with an extreme ownership spirit, and a fun culture.",
      "Utilizing technologies like- JavaScript, ReactJS, Java, Spring Boot, Spark, Python, FastAPI, Langchain, PostgreSQL, Docker, Git, GitHub, Postman, Figma to deliver robust applications.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Motorola Mobility",
    icon: motorola,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Wireless modem platform development for Motorola mobile devices to ensure performance and efficiency of communication chip-sets",
      "Application development to keep the track of modem data and logging and checking the important metrics",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "Netflix Clone made with React, Redux and Firebase. Frontend enables user to naviagte through movies list providing an efficient and convenient solutions to all your streaming needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/akj0712/Netflix-Clone",
  },
  {
    name: "Booking App",
    description:
      "Web-based platform that allows users to search, book, and manage hotels, and room from various providers, providing a convenient and efficient solution for all your bookings needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "contextapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/akj0712/Booking-App",
  },
  {
    name: "Dark Sky Weather",
    description:
      "Web-based platform that allows users to search for the city and access the real time weather information about the city. Providing an simple and efficient glance of the current weather.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "realtimeapi",
        color: "blue-text-gradient",
      },
    ],
    image: darksky,
    source_code_link: "https://github.com/akj0712/Dark-Sky",
  },
];

export { services, technologies, experiences, testimonials, projects };
