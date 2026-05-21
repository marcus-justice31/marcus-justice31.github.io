import noIMGavailable from "../assets/banners/noIMGavailable.jpg";
import mealDashboardImg from "../assets/banners/(compress)_ai_meal_dashboard.png";
import onlineOrderUI from "../assets/banners/onlineOrderUI.png";
import bankingUI from "../assets/banners/bankingUI.png";

/* ----Statement Processor Images---- */
import sp_img1 from "../assets/banners/statementProcessor_images/(compress)_statementProcessor_img1.png";
import sp_img2 from "../assets/banners/statementProcessor_images/(compress)_statementProcessor_img2.png";
import sp_img3 from "../assets/banners/statementProcessor_images/(compress)_statementProcessor_img3.png";
import sp_img4 from "../assets/banners/statementProcessor_images/(compress)_statementProcessor_img4.png";
import sp_img6 from "../assets/banners/statementProcessor_images/(compress)_statementProcessor_img6.png";
import sp_img7 from "../assets/banners/statementProcessor_images/(compress)_statementProcessor_img7.png";

/* ----Raspberry Pi Hosting Images---- */
import rp_img1 from "../assets/banners/raspberryPi_images/(compress)_raspPi_img1.png";
import rp_img2 from "../assets/banners/raspberryPi_images/(compress)_raspPi_img2.png";

/* ----Banking Web App Images---- */
import fm_bank_img1 from "../assets/banners/fmBank_images/(compress)_fmBank_img1.png";
import fm_bank_img2 from "../assets/banners/fmBank_images/(compress)_fmBank_img2.png";
import fm_bank_img3 from "../assets/banners/fmBank_images/(compress)_fmBank_img3.png";

/* ----Ecommerce BI Dashboard Images---- */
import ecommerce_bi_dashboard from "../assets/banners/ecomBI_images/(compress)_ecommerce_bi_dashboard.png";

/* ----Smart Sorting System Images---- */
import sss_img1 from "../assets/banners/wasteClassification_images/(compress)_sw_img1.png";
import sss_img2 from "../assets/banners/wasteClassification_images/(compress)_sw_img2.png";
import sss_img4 from "../assets/banners/wasteClassification_images/(compress)_sw_img4.png";
import sss_img5 from "../assets/banners/wasteClassification_images/(compress)_sw_img5.png";

/* ----Smart Parking System Images---- */
import smartParking_img1 from "../assets/banners/smartParking_images/(compress)_sp_img1.png";
import smartParking_img2 from "../assets/banners/smartParking_images/(compress)_sp_img2.png";
import smartParking_img3 from "../assets/banners/smartParking_images/(compress)_sp_img3.png";
import smartParking_img4 from "../assets/banners/smartParking_images/(compress)_sp_img4.png";
import smartParking_img5 from "../assets/banners/smartParking_images/(compress)_sp_img5.png";
import smartParking_img6 from "../assets/banners/smartParking_images/(compress)_sp_img6.png";

/* ----Peer-to-Peer App Images---- */
import p2p_3peersDownload from "../assets/banners/p2p_images/p2p_3peersDownload.png"

/* ----Ecommerce UI Images---- */
import ecommerceUI from "../assets/banners/ecommerce_images/ecommerceUI.png";
// import ecommerceUI2 from "../assets/banners/ecommerce_images/ecommerceUI2.png";

/* ----CPU Implementation Images---- */
import cpu_implementation from "../assets/banners/cpuImplementation_images/cpu_implementation.png";


/* ----Project template----- */
/*
  {
    title: "",
    description:
      "",
    image: noIMGavailable,
    tags: [
      { name: "React", color: "#49d2f8ff" },

    ],
    github: "https://github.com/marcus-justice31/",
    details: [
      "Built a responsive React UI with reusable components",
    ],
  },
*/
const projects = [
  {
    title: "AI Automation For Processing Visa Statements",
    description:
      "A self-hosted GUI that allows me to upload my visa statements, then have an AI workflow automatically process the spendings and insert them into a Google Sheet for tracking and budgeting purposes.",
    images: [ sp_img1, sp_img2, sp_img3, sp_img4, sp_img6, sp_img7 ],
    tags: [
      { name: "React", color: "#49d2f8ff" },
      { name: "Vite", color: "#9d1ef7ff" },
      { name: "n8n", color: "#f3127b" },
      { name: "OpenAI API", color: "#19af85ff" },
      { name: "Google Sheets API", color: "#19af85ff" },
      { name: "Raspberry Pi", color: "#f3127b" },
      { name: "Linux", color: "#2c3030ff" },
      { name: "nGinx", color: "#03b318" },
    ],
    github: "https://github.com/marcus-justice31/statement-processor",
    details: [
      "Built a React + Vite app that allows uploading visa statement PDFs via a clean drag-and-drop interface (validates file type and size before allowing upload)",
      "Designed an n8n workflow to automate PDF processing, transaction data extraction and parsing, classify transaction into spending categories, and inserts into Google Sheets",
      "The app triggers the n8n workflow via an HTTP POST request to the n8n webhook URL, sending the uploaded PDF as binary data for processing",
      "Locally-hosted the application on my Raspberry Pi 4, served with nGinx and is accessible across any device on my local network, enabling for secure PDF processing without relying on third-party services",
      // "Deployed the application on my Raspberry Pi 4, served with nGinx and is accessible across any device on my local network, enabling for secure PDF processing without relying on third-party services",
      "The AI workflow utilizes the OpenAI API to parse the extracted text and categorize the transactions, ensuring accurate and structured data is sent to the Google Sheets API for seamless financial tracking and budgeting",
      "This project removes the repetitive and time-consuming task of manually entering transactions into a spreadsheet, while also providing a secure and private solution by keeping all processing local to my own hardware",
       "Reduced the time spent on manual data entry by over 90%, making the process 25x faster"
    ],
  },

  {
    title: "Self-Hosted n8n on Raspberry Pi",
    description:
      "Self-hosted n8n workflow automation on a Raspberry Pi, enabling local execution of custom workflows.",
    images: [ rp_img1, rp_img2 ],
    tags: [
      { name: "Raspberry Pi", color: "#f3127b" },
      { name: "Linux", color: "#2c3030ff" },
      { name: "Docker", color: "#0283d3" },
      { name: "CloudFlare Tunnel", color: "#f7781eff" },
    ],
    github: "https://github.com/marcus-justice31/",
    details: [
      "Deployed n8n on my Raspberry Pi 4, utilizing Docker for containerization and ensuring efficient resource management on the limited hardware",
      "The Docker container runs 24/7, allowing for reliable execution of automated workflows without needing to keep a separate computer on",
      "Configured a Cloudflare Tunnel to expose the self-hosted n8n instance through an existing domain (which allows me to comunicate with APIs outside of my local network, while implementing strict access controls to ensure security and prevent unauthorized access)",
    ],
  },

  {
    title: "Banking Web App",
    description:
      "A full-stack banking app with real-time transaction tracking, multi-account integration, and secure money transfers using Next.js, Appwrite, and Plaid.",
    images: [ fm_bank_img1, fm_bank_img2, fm_bank_img3 ],
    tags: [
      { name: "TypeScript", color: "#0283d3ff" },
      { name: "Tailwind CSS", color: "#9d1ef7ff" },
      { name: "Appwrite", color: "rgb(250, 55, 91)" },
      { name: "Next.js", color: "#353535" },
      { name: "Shadcn", color: "#353535" },
      { name: "Zod", color: "#004793" },
      { name: "Plaid", color: "#353535" },

    ],
    github: "https://github.com/marcus-justice31/Finance-Management-Banking-App",
    details: [
      "Implemented a platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other users, and to manage their finances through a dashboard with visualizations and insights.",
      "Utilized Appwrite and Zod for secure SSR authentication with proper validations and error handling, ensuring robust user authentication and session management",
      "Designed a responsive and intuitive UI using Tailwind CSS and Shadcn components, providing users with a seamless experience across devices",
      "Integrated Plaid API to securely connect users' bank accounts, fetch transaction data, and enable real-time updates on the dashboard",
      // "Implemented a money transfer feature that allows users to send funds to other users within the platform, with proper validation and error handling to ensure secure transactions",
      // "Designed and implemented a finance management dashboard that provides users with insights into their spending habits, categorizes transactions, and offers visualizations for better financial understanding"
    ],
  },

  {
    title: "Ecommerce BI Dashboard – Databricks Lakehouse Project",
    description:
      "An ecommerce analytics lakehouse in Databricks using Medallion Architecture (Bronze, Silver, Gold) to process raw transactional data and generate business insights through dashboards.",
    image: ecommerce_bi_dashboard,
    tags: [
      { name: "DataBricks", color: "rgb(209, 56, 48)" },
      { name: "Python", color: "#0283d3ff" },
      { name: "PySpark", color: "#f7781eff" },
      { name: "SQL", color: "#00684A" },
      { name: "Jupyter Notebook", color: "#f7781eff" },
      { name: "Data Engineering", color: "#7e7e7eff" },
    ],
    github: "https://github.com/marcus-justice31/ecommerce-bi-dashboard",
    details: [
      "Implemented a Medallion Architecture (Bronze, Silver, Gold) in Databricks, creating 6 schemas to structure raw, cleaned, and analytics-ready ecommerce datasets",
      "Processed 80,000+ rows and 35+ attributes of ecommerce data using PySpark and SQL within Databricks notebooks",
      "Ingested 100,000+ historical order records from multiple CSV files representing 3 months of transactional data",
      "Performed data cleaning and transformation including handling null values, datatype mismatches, duplicates, anomalies, and inconsistent categorical values",
      "Utilized Delta Lake tables for schema enforcement, transaction logging, and reliable data storage within the lakehouse architecture",
      "Transformed raw transactional data into fact and dimension-style tables for downstream analytical queries",
      "Built a Databricks dashboard to visualize key business insights including monthly sales trends and net revenue by product category",
      "Applied PySpark DataFrame transformations to clean, validate, and aggregate ecommerce datasets for analytical reporting"
    ],
  },

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
    title: "Waste Classification System",
    description:
      "A YOLOv11-powered Smart Waste Sorting System for real-time waste classification into garbage, recyclables, and compost.",
    images: [ sss_img1, sss_img2, sss_img4, sss_img5 ],
    tags: [
      { name: "React", color: "#49d2f8ff" },
      { name: "Python", color: "#0283d3ff" },
      { name: "HTML", color: "#f7781eff" },
      { name: "CSS", color: "#9d1ef7ff" },
      { name: "Flask", color: "#2e9db3ff" },
      { name: "Ultralytics", color: "#00253cff" },
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
    images: [ smartParking_img1, smartParking_img2, smartParking_img3, smartParking_img4, smartParking_img5, smartParking_img6 ],
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
      "My motive for this project was to work towards buidling an application to help streamline the ordering process for my mom's small baking business, while learning more about full-stack web development and payment gateway integration"
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
    image: noIMGavailable,
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