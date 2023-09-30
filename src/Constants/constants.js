import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  mysqlIcon,
  cIcon,
  gitIcon,
  githubIcon,
  mongodbIcon,
  linuxIcon,
  pyIcon,
  nodeIcon,
  windowsIcon,
  myntra,
  movie_collection,
  calm_clock,
  inventory,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  mysqlIcon,
  cIcon,
  gitIcon,
  githubIcon,
  mongodbIcon,
  linuxIcon,
  pyIcon,
  nodeIcon,
  windowsIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "Well skilled programmer in proven skills of Front-End and Back-End. Focused on keeping an immersive and engaging user experience through efficient website development.",

    "Transforming ideas into reality through elegant and efficient code, I strive to bridge the gap between design and technology.",

    "When I'm not immersed in lines of code, you can find me exploring the outdoors, enjoying a good book, or engaging in community events. I believe in giving back and am always excited to share my knowledge and experiences with others to inspire the next generation of developers.",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Movie collection",
    description: 'Purpose is to store favourite movies with links from where we can watch. It make with use of HTML, CSS, JS, React.js, MongoDB, Express.js, Node.js.',
    image: movie_collection,
    source_code_link: 'https://github.com/peeyush21june',
    demo_link: '',
  },
  {
    name: 'Myntra-Clone',
    description: 'This is a working clone of the online shopping platform MYNTRA. This project has been done in order to learn the basic working of a website by implementing HTML5, CSS3, JavaScript, React.js.',
    image: pawsitivePrototype,
    source_code_link: 'https://github.com/peeyush21june/myntra_clone',
    demo_link: 'https://github.com/peeyush21june/myntra_clone',
  },
  {
    name: 'Inventory Management',
    description: 'Inventory management system with user privilege and JWT authentication. •	Technical Skills: MongoDB and React.js.',
    image: calculator,
    source_code_link: 'https://github.com/peeyush21june',
    demo_link: '',
  },
  {
    name: 'Calm-Clock',
    description: 'This clock will not show you time, also to-do list, reminder, calm sound & photo',
    image: calm_clock,
    source_code_link: '',
    demo_link: ''
  }
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'C++',
    title: 'C++',
    icon: cIcon,
    description:
      'I have extensive experience utilizing C++ for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'mysql',
    title: 'MySQL',
    icon: mysqlIcon,
    description:
      '',
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    icon: mongodbIcon,
    description:
      'I have a strong command of MongoDB, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'window',
    title: 'Windows',
    icon: windowsIcon,
    description:
    '',
  },
  
  {
    id: 'liux',
    title: 'Linux',
    icon: linuxIcon,
    description:
      '',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
