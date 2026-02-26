// import placeHolderImg from "../assets/banners/image-coming-soon-placeholder.webp";
import placeHolder from "../assets/banners/placeHolder.jpg";
import mealDashboardImg from "../assets/banners/ai_meal_dashboard.png";
import smartSortingUiImg from "../assets/banners/smartsorting_ui.png";
import smartParkingImg from "../assets/banners/SmartParkingDashboard.png";
import ecommerceUI from "../assets/banners/ecommerceUI.png";
// import ecommerceUI2 from "../assets/banners/ecommerceUI2.png";
import cpu_implementation from "../assets/banners/cpu_implementation.png";
import p2p_3peersDownload from "../assets/banners/p2p_3peersDownload.png"
import onlineOrderUI from "../assets/banners/onlineOrderUI.png";
import bankingUI from "../assets/banners/bankingUI.png";

const projects = [
  {
    title: "Meal Planning App",
    description:
      "A React app that generates personalized meal plans based on personal goals, utilizing the OpenAI API.",
    image: mealDashboardImg,
    tags: [
      { name: "React", color: "#49d2f8ff" },
      { name: "Python", color: "#0283d3ff" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "HTML", color: "#f7781eff" },
      { name: "CSS", color: "#9d1ef7ff" },
      { name: "FastAPI", color: "#55d5b5ff" },
      { name: "OpenAI API", color: "#19af85ff" },
      { name: "MongoDB", color: "#00684A" },
      
    ],
    github: "https://github.com/marcus-justice31/ai-meal-plan",
    details: [
      "Built a responsive React UI with reusable components",
      "Integrated OpenAI API for dynamic meal plan generation",
      "Stored user preferences and meal plans using MongoDB",
      "Designed prompts to minimize API cost while maintaining accuracy",
      "Users are able to generate new meal plans tailored towards their fitness goals (i.e. weight loss), their current body composition, as well as their activity levels and dietary restrictions",
      "Future plans for this application is to create recipes and cooking instructions for the generated meal plans"
    ],
  },

  {
    title: "Smart Waste Sorting System",
    description:
      "A YOLOv11-powered Smart Waste Sorting System for real-time waste classification into garbage, recyclables, and compost.",
    image: smartSortingUiImg,
    tags: [
      { name: "React", color: "#49d2f8ff" },
      { name: "Python", color: "#0283d3ff" },
      { name: "HTML", color: "#f7781eff" },
      { name: "CSS", color: "#9d1ef7ff" },
      { name: "Flask", color: "#2e9db3ff" },
      { name: "Ultralytics", color: "#00253cff"},
      { name: "Git", color: "#2c3030ff" },
    ],
    github: "https://github.com/marcus-justice31/smart-sorting-waste-system",
    details: [
      "Delivered a robust, low-latency system capable of operating on consumer-grade hardware under extended use conditions without major performance degradation",
      "Trained the model using over 50,000 images across three public datasets, with custom preprocessing and augmentation to improve detection performance",
      "Delivered a robust, low-latency system maintaining less than 200ms average inference time per image under extended use",
      "Improved overall detection accuracy by 74% and precision by 43% over the baseline model",
    ],
  },

  {
    title: "Smart Parking System",
    description:
      "A cloud-native, smart parking system that simulates IoT sensors to monitor parking space availability in real-time.",
    image: smartParkingImg,
    tags: [
      { name: "React", color: "#49d2f8ff" },
      { name: "Python", color: "#0283d3ff" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "HTML", color: "#f7781eff" },
      { name: "CSS", color: "#9d1ef7ff" },
      { name: "FastAPI", color: "#55d5b5ff" },
      { name: "MongoDB", color: "#00684A" },
      { name: "Docker", color: "#0283d3" },
      { name: "Azure Cloud", color: "#0283d3ff" },
      { name: "RabbitMQ", color: "#f7781eff" },
      { name: "Git", color: "#2c3030ff" },
    ],
    github: "https://github.com/marcus-justice31/smart-parking-system",
    details: [
      "Built a responsive user interface in React with dynamic dashboards for both users and admins, supporting real-time updates and scalable system interaction",
      "Developed 10+ backend API endpoints for user authentication, dynamic pricing, wallet management, and admin controls, improving system scalability and usability",
      "Utilizes RabbitMQ message-broker software to enable asynchronous communication and prevents multiple users from purchasing a parking spot at the same time (race condition)",
      "Deployed React (frontend) and FastAPI (backend) on on Azure using separate Docker containers, enabling service-to-service communication over HTTP",
      "Implemented dynamic, time-based pricing by fetching local device time to apply higher rates during peak hours"
    ],
  },

  {
    title: "Online Order Express React",
    description:
      "An online ordering system for food items that has a functioning PayPal checkout system.",
    image: onlineOrderUI,
    tags: [
      { name: "React", color: "#49d2f8ff" },
      { name: "Python", color: "#0283d3ff" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "HTML", color: "#f7781eff" },
      { name: "CSS", color: "#9d1ef7ff" },
      { name: "Express JS", color: "#f7df1e" },
      { name: "MongoDB", color: "#00684A" },
    ],
    github: "https://github.com/marcus-justice31/OnlineOrder-ExpressReact",
    details: [
      "Designed and implemented an online shopping web application following a MERN (MongoDB, Express, React, Node) tech stack",
      "Utilized the ReactJS framework to create an interactive webpage for adding and deleting items to a shopping cart",
      "Implemented a checkout system using PayPal’s JavaScript SDK and PayPal’s REST APIs",
      "Utilized the ExpressJS framework to employ middleware to transmit shopping cart data as JSON to the server, then to store it onto a NoSQL cloud database",
    ],
  },

  {
    title: "Secure ATM Banking System",
    description:
      "A Java system which ensures the confidentiality, integrity and authenticity of all transactions between the ATM client and the banking server.",
    image: bankingUI,
    tags: [
      { name: "Java", color: "#f7781eff" },
      { name: "Java Swing", color: "#9d1ef7ff" },
      { name: "Computer Networking", color: "#7e7e7eff" },
      { name: "Cryptography", color: "rgb(202, 29, 89)" },
    ],
    github: "https://github.com/marcus-justice31/Secure-ATM-Banking-System",
    details: [
      "Implemented secure ATM transaction procedures involving mutual authentication through RSA, offering confidentiality to messages through AES, and guaranteeing integrity to messages using HMAC",
      "The system logs audits to monitor and validate transactional action and help create accountability",
      "The frontend is a simple GUI (using Java Swing) representing the ATM interface for the client",
      "The server was designed to authenticate the users, processes transactions, and maintains accounts",
      "Implemented an audit logging module securely logs all transaction activity",
      "Implemented assistance for secure account management, including password handling, encrypted message exchange, replay attack prevention using timestamps, and cryptographic message authentication codes (MACs)",
      "The design aims to replicate a multiuser environment, where multiple clients may connect and interact with the server simultaneously"
    ],
  },

  {
    title: "Peer-to-Peer Application",
    description:
      "A Peer-to-Peer (P2P) file-sharing application demonstrates the fundamentals of socket programming and the interactions between clients and servers using both UDP and TCP protocols.",
    image: p2p_3peersDownload,
    tags: [
      { name: "C", color: "#f7781eff" },
      { name: "Computer Networking", color: "#7e7e7eff" },
    ],
    github: "https://github.com/marcus-justice31/Peer-to-Peer-Application",
    details: [
      "The system consisted of an index server and multiple peers, with communication facilitated by different PDU types",
      "The index server facilitates peer registration, content listing, and content deregistration, while peers communicate directly to exchange files",
      "The system correctly handles content registration and de-registration, ensuring that content is only available for download if it is actively registered by a peer",
      "The client-server interaction using UDP for communication between peers and the index server was efficient, enabling fast content listing and registration",
      "TCP was successfully employed for reliable file transfers between peers, ensuring no data loss during the download process",
      "Error handling was effectively implemented through the use of ERROR packets, which provided feedback in case of issues such as missing content or failed downloads",
    ],
  },

  {
    title: "Music Sharing Web Application",
    description:
      "A cloud-native music sharing application with microservices containerized via Docker, managed by Kubernetes, and hosted on Google Cloud.",
    image: placeHolder,
    tags: [
      { name: "Java", color: "#f7781eff" },
      { name: "Appache Tomcat", color: "#f7df1e" },
      { name: "MySQL", color: "#00684A" },
      { name: "Kubernetes", color: "#0283d3ff" },
      { name: "Docker", color: "#0283d3" },
      { name: "Google Cloud", color: "#008e09" },
      { name: "JSP", color: "#7e7e7eff" },
      { name: "HTML", color: "#f7781eff" },
      { name: "CSS", color: "#9d1ef7ff" },
    ],
    github: "https://github.com/marcus-justice31/Song-Sharing-App",
    details: [
      "Designed and implemented a Java-based microservices architecture using Docker for containerization and Kubernetes for service orchestration defined through YAML",
      "Designed system using UML and ER diagrams and utilized object-oriented programming principles to design modular and maintainable code",
      "Deployed backend services using Apache Tomcat as middleware to handle HTTP requests, servlets, and REST endpoints",
      "Built frontend microservices that aggregate backend service responses and dynamically renders content using servlets and JSPs",
      "Implemented asynchronous event-driven communication between microservices using KubeMQ",
      "Designed relational schemas linking users to songs via foreign keys, enabling efficient user-specific data retrieval",
    ],
  },

  {
    title: "E-Commerce Application",
    description:
      "An E-Commerce DBMS where users can buy/sell items, developed using Java and Oracle SQL.",
    image: ecommerceUI,
    tags: [
      { name: "Java", color: "#f7781eff" },
      { name: "JavaFX", color: "#9d1ef7ff" },
      { name: "Oracle SQL", color: "#00684A" }
    ],
    github: "https://github.com/marcus-justice31/E-Commerce-App",
    details: [
      "Developed a Java application with an integrated Oracle SQL database to perform efficient data querying and retrieval",
      "Designed and modeled a relational database system using ER diagrams with 5 entities and 4-10 attributes each",
      "Implemented 6+ advanced SQL queries for data retrieval",
      "Applied Bernstein’s Algorithm to normalize the schema and remove data redundancies",
      "Built a functional JavaFX UI where users can create an account to buy and sell items",
      "Users can log into the application and have a page where they can view all their listed items that have not been sold, and can list more items",
      "Users can view other listed items on a buy page, and have the option to buy those items (exploring buy page excludes their own listed items) "
    ],
  },

  {
    title: "CPU Implementation using VHDL",
    description:
      "A CPU implementation that can perform 26 different mnemonic operations",
    image: cpu_implementation,
    tags: [
      { name: "VHDL", color: "#f73b1eff" }
    ],
    github: "https://github.com/marcus-justice31/E-Commerce-App",
    details: [
      "*fixxx*",
    ],
  },
];

export default projects;