import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    php,
    html,
    css,
    reactjs,
    laravel,
    tailwind,
    nodejs,
    python,
    git,
    figma,
    bootstrap,
    meta,
    travv,
    amity,
    sih,
    dcon,
    swap,
    tripguide,
    threejs,
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
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "React Js Development",
      icon: mobile,
    },
    {
      title: "Frontend Development",
      icon: backend,
    },
    {
      title: "Backend Development",
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
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Laravel",
      icon: laravel,
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
      name: "Python",
      icon: python,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
  ];
  
  const education = [
    {
      degree: "Bachelor of Technology",
      icon: "src/assets/Amity-logo.png", 
    school_name: "Amity University, Kolkata",
    date: "2021 - 2025",
    details: [
      "Stream: CSE"
      ]
    },
    
    {
      degree: "ISC XII Board",
      icon: "src/assets/header-dark.png", 
    school_name: "St. Agnes School, Kharagpur",
    date: "2019 - 2021",
    details: [
      "Stream: Science"
      ]
    },
  ];
  

  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Travarsa Private Limited",
      icon: travv,
      iconBg: "#383E56",
      date: "June 2024 - Aug 2024",
      points: [
        "Developed and maintained responsive websites and web applications for clients using HTML, CSS, and JavaScript and libraries such as React and three js.",
        "Collaborated with the design team to create user-friendly interfaces and optimize user experience in many personal projects.",
        "Ensured cross-browser compatibility and responsiveness of all web applications.",
        "Conducted code reviews, presentations and provided feedback to improve code quality and efficiency.",
      ],
    },
    {
      title: "IT Club Member",
      company_name: "Amity University, Kolkata ",
      icon: amity,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Feb 2024",
      points: [
        "Conducted sessions on latest technologies, coding practices, and industry trends to enhance students' technical knowledge.",
        "Facilitated events to encourage problem-solving, teamwork, and innovation among peers.",
        "Coordinated guest lectures and networking events with professionals to bridge the gap between academia and industry.",
        "Established study groups and mentorship programs to foster a collaborative learning environment within the university.",
      ],
    },
    {
      title: "SIH'23 Team Coordinator",
      company_name: "Team HexaByte, Amity University Kolkata",
      icon: sih,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Dec 2023",
      points: [
        "Engaged in team participation in our university's internal hackathon.",
        "Organized and delegated tasks effectively to ensure timely and efficient project completion.",
        "Fostered a collaborative environment, encouraging innovative problem-solving and idea-sharing.",
        "Articulated our project's concept, development process, and impact clearly and convincingly to the judging panel.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Ajmeri led the team in a great manner, a good team player.",
      name: "Koustav Mondal",
      designation: "SIH member",
      company: "Team HexaByte",
      image: "https://media.licdn.com/dms/image/C4D03AQFWLvFxKaqc0w/profile-displayphoto-shrink_800_800/0/1657747240051?e=1729123200&v=beta&t=VS3mTeFc9g2bA8GYzNZ8SqPouVBoZ6Go2RVmc8RvcIQ",
    },
    {
      testimonial:
        "Ajmeri's projects are very eye catchy and creative, will definitely work hard for her clients.",
      name: "Vishal Soni",
      designation: "Peer",
      company: "Amity University Kolkata",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFEAeRKne42mg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723389998583?e=1729123200&v=beta&t=CwWi8nMIihEYDmFJjVzSY8-oA3bfpQxcLVhPBD3q91M",
    },
    {
      testimonial:
        "Ajmeri is very hardworking and manages her time efficiently.",
      name: "Vaishnavi Kalwar",
      designation: "Peer",
      company: "Amity University Kolkata",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHM6xXP2CqOog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719574293691?e=1729123200&v=beta&t=Ya0Jo-MfkxD-4zBkbhzlaGo5x5Sqh9hG4Ez3uO7vlK4",
    },
  ];
  
  const projects = [
    {
      name: "3DConfig",
      description:
        "An interactive 3D configurator that allows users to design and customize according to their needs in real-time. This innovative tool enhances user experience by offering a dynamic visualization of various colors, materials, and styles, ensuring a personalized and engaging shopping experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dcon,
      source_code_link: "https://github.com/ajmerikhatun/3DConfig",
      live_site_link: "https://3dconfigy.netlify.app/", 

    },
    {
      name: "LearnSwap",
      description:
        "A dynamic and interactive community skill-sharing platform designed to foster learning and collaboration among individuals. Users can access the courses as well as they can even share the courses. The courses are in video format for better learning through visuals.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: swap,
      source_code_link: "https://github.com/ajmerikhatun/LearnSwap",
      live_site_link: "http://learnswap.great-site.net",
    },
  ];
  
  export { services, technologies, education, experiences, testimonials, projects };