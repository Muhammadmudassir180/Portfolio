/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  // title2: "Hrishi",
  logo_name: "Muhammad Mudassir",
  // nickname: "hrishi1999 / picleric",
  full_name: "Muhammad Mudassir ",
  subTitle:
    "Machine Learning Enthusiast,Full Stack Developer. I’m a tech enthusiast who loves exploring new ideas and figuring out how to turn them into real, impactful solutions. I’m always looking for opportunities to grow, contribute to meaningful projects, and make a positive difference through technology..",
  resumeLink:
    "https://drive.google.com/file/d/1d9NV3vjpi47TG6sO00b6zByFtCTP5KaH/view?usp=sharing",
  mail: "mauhammadmudassir981@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Muhammadmudassir180",
  linkedin: "https://www.linkedin.com/in/muhammad-mudassir-/",
  gmail: "muhammadmudassir981@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: " ",
  instagram: " ",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
        "⚡ MongoDB and MySQL for databases",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Kotlin",
        //   fontAwesomeClassname: "simple-icons:kotlin",
        //   style: {
        //     color: "#5c79df",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Go",
        //   fontAwesomeClassname: "simple-icons:go",
        //   style: {
        //     color: "#00A7D0",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        // {
        //   skillName: "C#",
        //   fontAwesomeClassname: "simple-icons:csharp",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NextJS",
        //   fontAwesomeClassname: "simple-icons:nextdotjs",
        //   style: {
        //     color: "#FFFFFF",
        //     backgroundColor: "#1D1D1D",
        //     borderRadius: "50%",
        //   },
        // },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android App Development",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Certified AWS Developer Associate and Cloud Practioner",
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing web apps on GCP and AWS",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision ",
        "⚡ Experience with Computer vision Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Science and Technology",
      subtitle: "Masters in Computer Science",
      logo_path: "nust.png",
      alt_name: "NUST",
      duration: "2024 - ongoing",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ Learn Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "https://www.nust.edu.pk/",
    },
    {
      title: "Institute of Space and Technology",
      subtitle: "Bachlors in Electrical Engineering",
      logo_path: "ist.jpeg",
      alt_name: "IST",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied core subjects like Computer Programming, Control Systems, Networking, Signals and System ,DSP, etc.",
        "⚡ I have also completed various online courses for Machine Learning, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Electrical Engineering course. ",
      ],
      website_link: "https://ist.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "AWS Developer Associate",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "AWS Certified Cloud Practioner",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Summer of Code 2019",
    //   subtitle: "Google / Sugar Labs",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Code-In Student",
    //   subtitle: "2014-2017",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#1e70c1",
    // },
    // {
    //   title: "Google Summer of Code Mentor",
    //   subtitle: "2017 / 2018 / 2020",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffbfae",
    // },
    // {
    //   title: "Google Code-In Mentor",
    //   subtitle: "2017 / 2018 / 2019",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#b190b0",
    // },
    // {
    //   title: "Deep Learning Specialization",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Sequence Models",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#F6B808",
    // },
    // {
    //   title: "Convolutional Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Structuring Machine Learning Projects",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
    //   alt_name: "Google",
    //   color_code: "#7A7A7A",
    // },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Android Developer Nanodegree",
    //   subtitle: "Part of Google India Scholarship Program",
    //   logo_path: "100.png",
    //   certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
    //   alt_name: "Google",
    //   color_code: "#C5E2EE",
    // },
    // {
    //   title: "InOut 4.0 Winner #2",
    //   subtitle: "2017",
    //   logo_path: "ino.png",
    //   certificate_link: " ",
    //   alt_name: "InOut",
    //   color_code: "#fffbf3",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internships. I've mostly done projects on my own and I actively look for new opportunities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software and Machine Learning Engineer",
          company: "National AeroSpace Science and Technology Park",
          company_url: "https://www.nastp.gov.pk",
          logo_path: "nastp.jpeg",
          duration: "Oct 2023 - Ongoing",
          location: "Rawalpindi, Pakistan",
          description: [
            "⚡  Developed a diverse datasets for training autonomous UAV models, ensuring high-quality data for ML pipelines.\n",
            "⚡  Engineered computer vision models for ADAS and UAV applications, leveraging deep learning techniques to improve object detection accuracy by 15%",
            "⚡  Designed and implemented a 360-degree surveillance system utilizing ML-based object detection and multi-object tracking for enhanced situational awareness.",
            "⚡  Optimized model training by applying transfer learning with pre-trained YOLO models, reducing training time by 20% and boosting detection accuracy by 10%.",
            "⚡  Built a machine learning model to classify high-energy gamma particles in a ground-based atmospheric Cherenkov gamma telescope",
            "⚡  Built and Engineered a custom dataset from scratch and applied advanced preprocessing for a hybrid semantic search engine integrating FAISS and MongoDB to retrieve contextually relevant passages from a custom-built corpus for large language model (LLM) prompting.",
            "⚡  Fine-tuned an LLM (Mistral-7B) to generate context-aware, grounded answers based on retrieved documents using embeddings and engineered prompts",
            "⚡  Integrated ML models with backend services using REST APIs, leveraging Node.js and Express.js for seamless deployment and real-time inference",
          ],
          color: "#f10000",
        },
        // {
        //   title: "Full Stack Developer",
        //   company: "Quicko",
        //   company_url: "https://quicko.com/",
        //   logo_path: "quicko.jpg",
        //   duration: "June 2021 - October 2021",
        //   location: "Ahmedabad",
        //   description:
        //     "Quicko is an online tax planning, preparation & filing platform for individuals & businesses.",
        //   color: "#2962FF",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Electrical Engineering",
          company: "Special Communication Organization",
          company_url: "https://sco.gov.pk/",
          logo_path: "sco.png",
          duration: "May 2022 - Aug 2012",
          location: "Rawalpindi, Pakistan",
          description:
            "I worked on the Dashboard project which helps users track their activities while using Sugar OS. I also worked on making a Tamagotchi-like widget for Sugar's Home Screen",
          color: "#ee3c26",
        },
        // {
        //   title: "Android App Developer Intern",
        //   company: "IAS4Sure",
        //   company_url: " ",
        //   logo_path: "buld.jpg",
        //   duration: "December 2019 - February 2020",
        //   location: "Work From Home",
        //   description:
        //     "Internship task was to make a native Android application. ",
        //   color: "#0071C5",
        // },
        // {
        //   title: "Web Developer",
        //   company: "Wrighter Writing Solutions",
        //   company_url: " ",
        //   logo_path: "wrighter.jpg",
        //   duration: "August 2020",
        //   location: "",
        //   description: "Develop a website using PHP and jQuery.",
        //   color: "#56A4D3",
        // },
        // {
        //   title: "Front-End Developer",
        //   company: "VJ TechServe",
        //   company_url: " ",
        //   logo_path: "vjt.png",
        //   duration: "September 2020",
        //   location: "",
        //   description: "Develop a portfolio website using ReactJS",
        //   color: "#800000",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hrishi2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    // "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    // link: "https://medium.com/@hrishipatel99",
    // avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: " Data Manager Backend Application",
      // url: "https://github.com/Hrishi1999/CineScope",
      description:
        " I designed and developed a comprehensive Backend Data Manager, utilizing MongoDB as the primary database to store data. This included creating fully functional routes for updating Data, implementing JWT and Express Authentication for secure login and routing, and developing Error Handling Middleware to ensure smooth operation. Additionally, I used Bcrypt to encrypt passwords, enhancing security measures within the system.",
      languages: [
        // {
        //   name: "React.js",
        //   iconifyClass: "logos-react",
        // },
        // {
        //   name: "TypeScript",
        //   iconifyClass: "devicon-typescript",
        // },
        // {
        //   name: "Node.js",
        //   iconifyClass: "devicon-nodejs",
        // },
        // {
        //   name: "Express.js",
        //   iconifyClass: "devicon-express",
        // },
        // {
        //   name: "MongoDB",
        //   iconifyClass: "logos-mongodb",
        // },
      ],
    },

    {
      name: "Object Detection and Tracking in IR Imagery",
      // url: "https://github.com/Hrishi1999/CineScope",
      description:
        " The development of a border surveillance system , utilizing IR cameras to detect and track threats. Optimized deep learning algorithms using YOLOv8 and YOLOv10 models \n for precise detection and Deep Learning Trackers for tracking, improving system accuracy by 25%.. Additionally, I integrated the system with a Pan-Tilt Unit, enhancing its control and flexibility.",
      languages: [
        {
          // name: "python",
          // iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: " LLM-Powered Hybrid RAG System for Islamic Knowledge Retrieval ",
      // url: "https://github.com/Hrishi1999/CineScope",
      description:
        " Built an end-to-end NLP system that integrates semantic search with LLMs to generate context-aware responses grounded in authentic sources. Designed custom datasets from scratch, performed embedding optimization, and fine-tuned transformer models for improved relevance and factual accuracy. Leveraged tools like FAISS and MongoDB to bridge structured and unstructured retrieval. Demonstrates strong foundations in ML, NLP pipelines, and practical deployment of LLMs.",
      languages: [
        // {
        //   name: "React.js",
        //   iconifyClass: "logos-react",
        // },
        // {
        //   name: "TypeScript",
        //   iconifyClass: "devicon-typescript",
        // },
        // {
        //   name: "Node.js",
        //   iconifyClass: "devicon-nodejs",
        // },
        // {
        //   name: "Express.js",
        //   iconifyClass: "devicon-express",
        // },
        // {
        //   name: "MongoDB",
        //   iconifyClass: "logos-mongodb",
        // },
      ],
    },
    // {
    //   name: "Journalify",
    //   url: "https://play.google.com/store/apps/details?id=com.picle.journalify",
    //   description:
    //     "You personal journaling companion, goals & daily challenges! About 5k+ downloads on Play Store.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "RecipesAPI",
    //   url: "https://rapidapi.com/Hrishi1999/api/recipesapi2",
    //   description: "Get recipes for hundreds and thousands of dishes",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //   ],
    // },
    // {
    //   name: "opPortfolio",
    //   url: "https://github.com/Hrishi1999/opPortfolio",
    //   description: "(This) A clean and full customizable portfolio template.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    // },
    // {
    //   name: "Cab Security System",
    //   url: " ",
    //   description:
    //     "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   name: "Lensinator",
    //   url: " ",
    //   description:
    //     "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "Doorbell.io",
    //   url: "https://github.com/Hrishi1999/Doorbell.io",
    //   description:
    //     "A sound-classifier webapp made with ReactJS + TensorflowJS.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "TensorflowJS",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   name: "Video Summarization",
    //   url: "https://github.com/Hrishi1999/Video-Summarization",
    //   description:
    //     "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   name: "Dashboard Activity",
    //   url: "https://github.com/Hrishi1999/Dashboard.activity",
    //   description:
    //     "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Project Pickle",
    //   url: " ",
    //   description:
    //     "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
    //   languages: [
    //     {
    //       name: "Java",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Project Health Card",
    //   url: "",
    //   description:
    //     "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb",
    //     },
    //   ],
    // },
    // {
    //   name: "Food Classifier",
    //   url: " ",
    //   description:
    //     "A food classifier app using tflite which classfier over 50 Indian Dishes.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "Dart",
    //       iconifyClass: "logos-dart",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "Image Clustering",
    //   url: " ",
    //   description:
    //     "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "Antivirus",
    //   url: " ",
    //   description:
    //     "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //   ],
    // },
    // {
    //   name: "Sugar on Windows",
    //   url: " ",
    //   description:
    //     "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Object + Face Detection",
    //   url: " ",
    //   description: "2017 project. Object detection + accurate face detection.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   name: "Image Captioning with Visual Attention",
    //   url: " ",
    //   description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "DalSocial",
    //   url: " ",
    //   description:
    //     "An Android app to meet new people in the university, organize and join events. ",
    //   languages: [
    //     {
    //       name: "Kotlin",
    //       iconifyClass: "simple-icons:kotlin",
    //       color: "#F18E33",
    //     },
    //     {
    //       name: "Android",
    //       iconifyClass: "simple-icons:android",
    //       color: "#3DDC84",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "HalifaxFoodie",
    //   url: " ",
    //   description:
    //     "CSCI5410 Project. A multi-client recipe app for Halifax Foodies.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "AWS",
    //       iconifyClass: "logos-aws",
    //     },
    //     {
    //       name: "Google Cloud",
    //       iconifyClass: "logos-google-cloud",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
