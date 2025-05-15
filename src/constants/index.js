const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/react-logo.png",
  },
  {
    imgPath: "/images/logos/nodejs-logo.png",
  },
  {
    imgPath: "/images/logos/git-logo.png",
  },
  {
    imgPath: "/images/logos/mongoDB-logo.png",
  },
  {
    imgPath: "/images/logos/next-logo.png",
  },
  {
    imgPath: "/images/logos/razorpay-logo.png",
  },
  {
    imgPath: "/images/logos/tailwind-logo.png",
  },
  {
    imgPath: "/images/logos/Redux-logo.png",
  },
  {
    imgPath: "/images/logos/typescript-logo.png",
  },
  {
    imgPath: "/images/logos/express-logo.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Rachit has been instrumental in building full-stack features at Insybit. His AI dashboard work showcased both his engineering versatility and eye for scalable performance.",
    imgPath: "/images/logo-insybit.png",
    logoPath: "/images/logo-insybit.png",
    title: "Full Stack Developer",
    date: "March 2024 – Present",
    responsibilities: [
      "Built scalable frontend and backend systems using React.js, Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB.",
      "Developed an AI-powered call history dashboard with filters, transcript expansion, and CSV export.",
      "Optimized REST API usage by eliminating redundant calls and enhancing MongoDB indexing.",
      "Deployed full-stack solutions on Vercel and Render, improving release velocity and team collaboration."
    ],
  },
  {
    review:
      "Rachit's ownership and frontend expertise helped us ship Owltics' official site with high performance. His state management integration and backend contributions added tremendous value.",
    imgPath: "/images/logo-owltics.png",
    logoPath: "/images/logo-owltics.png",
    title: "Full Stack Developer Intern",
    date: "October 2023 – January 2024",
    responsibilities: [
      "Developed Owltics’ official website using React, Next.js, Tailwind CSS, and Node.js.",
      "Built and optimized REST APIs with Express.js and MongoDB.",
      "Integrated Redux for efficient state management, reducing load time by 30%.",
      "Enhanced frontend responsiveness and backend data handling."
    ],
  },
  {
    review:
      "Rachit’s contributions to the TNM Fest website made a noticeable impact on user experience and backend reliability. He brought thoughtful performance optimizations to the table.",
    imgPath: "/images/logo-mait.png",
    logoPath: "/images/logo-mait.png",
    title: "Full Stack Developer",
    date: "January 2023",
    responsibilities: [
      "Created the TNM Fest website using HTML, CSS, Joomla, Node.js, and Express.js.",
      "Implemented secure JWT-based authentication and improved DB query performance.",
      "Reduced page load time under 2 seconds using lazy loading and caching.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const myProjects = [
  {
        id: 4,
        title: "E-learning Platform",
        description: "A full-stack platform for online learning with payment integration.",
        subDescription: [
            "Built using MERN stack with secure JWT authentication and Razorpay integration.",
            "Developed RESTful APIs for user registration, login, and course transactions.",
            "Implemented backend optimizations using MongoDB indexes and caching.",
            "Ensured UI responsiveness for seamless learning experience across devices."
        ],
        href: "https://e-learning-platform-roan.vercel.app/",
        logo: "",
        image: "/images/e-learning.png",
        tags: [
            { id: 1, name: "React", path: "/assets/logos/react.svg" },
            { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
            { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
            { id: 4, name: "Razorpay", path: "/assets/logos/js.svg" }
        ]
    },
    
    {
      id: 5,
      title: "Dynamic Event Calendar",
      description: "An interactive calendar for managing and displaying events.",
      subDescription: [
        "Built using React, Vite, and Tailwind CSS with smooth month navigation.",
        "Implemented JWT-based authentication for secure event editing.",
        "Used localStorage to persist user data without backend reliance.",
        "Designed for performance with fast rendering and minimal API calls."
      ],
      href: "https://dynamic-event-calendar-application-main-indol.vercel.app/",
      logo: "",
      image: "images/dynamic-calendar.png",
      tags: [
        { id: 1, name: "React", path: "/assets/logos/react.svg" },
        { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
        { id: 3, name: "JWT", path: "/assets/logos/js.svg" }
      ]
    },
    {
        id: 2,
        title: "WSI Viewer",
        description: "A React-based Whole Slide Image (WSI) Viewer for pathology imaging.",
        subDescription: [
            "Built a custom slide viewer using React and OpenSeadragon for deep zoom into high-resolution pathology images.",
            "Implemented zoom, pan, and navigation controls for precise image examination.",
            "Used state management for synchronized views and user interactions.",
            "Tailored UI using Tailwind CSS for responsiveness and clarity in medical use cases."
        ],
        href: "https://wsi-viewer-pink.vercel.app/",
        logo: "",
        image: "/images/wsi-viewer.png",
        tags: [
            { id: 1, name: "React", path: "/assets/logos/react.svg" },
            { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
            { id: 3, name: "OpenSeadragon", path: "/assets/logos/js.svg" }
        ]
    },
    {
        id: 3,
        title: "Car-Rent App",
        description: "A car rental application for booking and exploring vehicles.",
        subDescription: [
            "Developed a responsive car rental web app using React and Tailwind CSS.",
            "Integrated routing and vehicle detail pages with search and filter features.",
            "Utilized reusable components for UI consistency and scalability.",
            "Included dummy data and future-ready structure for backend integration."
        ],
        href: "https://car-rent-eosin.vercel.app/",
        logo: "",
        image: "/images/car-rental.png",
        tags: [
            { id: 1, name: "React", path: "/assets/logos/react.svg" },
            { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
          ]
    },
    {
        id: 1,
        title: "Forest-Monitoring-System",
        description: "A web application for monitoring global forest conditions.",
        subDescription: [
            "Developed a data-driven React.js app that visualizes forest and environmental metrics globally.",
            "Integrated real-time datasets covering CO2 levels, deforestation rates, temperature, and humidity.",
            "Used Tailwind CSS and Chart.js to create clean, responsive data dashboards.",
            "Included a world map with interactive tooltips to explore country-level environmental data.",
            "Aimed to raise awareness about climate impact through data visualization."
        ],
        href: "https://forest-monitoring-system.vercel.app",
        logo: "",
        image: "/images/forest-monitoring.png",
        tags: [
            { id: 1, name: "React", path: "/assets/logos/react.svg" },
            { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
        ]
    },
];




export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  myProjects,
  navLinks,

};
