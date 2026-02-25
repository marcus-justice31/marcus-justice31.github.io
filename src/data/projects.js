import mealDashboardImg from "../assets/banners/ai_meal_dashboard.png";
import smartSortingUiImg from "../assets/banners/smartsorting_ui.png";
import smartParkingImg from "../assets/banners/SmartParkingDashboard.png";
import ecommerceUI from "../assets/banners/ecommerceUI.png";
// import ecommerceUI2 from "../assets/banners/ecommerceUI2.png";
import cpu_implementation from "../assets/banners/cpu_implementation.png";
import p2p_3peersDownload from "../assets/banners/p2p_3peersDownload.png"
import onlineOrderUI from "../assets/banners/onlineOrderUI.png";

const projects = [
  {
    id: 1,
    title: "Meal Planning App",
    description:
      "A React app that generates personalized meal plans using the OpenAI API.",
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
    ],
  },

  {
    id: 2,
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
    id: 3,
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
      { name: "Azure Cloud", color: "#0283d3ff" },
      { name: "RabbitMQ", color: "#f7781eff" },
      { name: "Git", color: "#2c3030ff" },
    ],
    github: "https://github.com/marcus-justice31/smart-parking-system",
    details: [
      "Built a responsive user interface in React with dynamic dashboards for both users and admins, supporting real-time updates and scalable system interaction",
      "Developed 10+ backend API endpoints for user authentication, dynamic pricing, wallet management, and admin controls, improving system scalability and usability",
      "Utilizes RabbitMQ message-broker software to enable asynchronous communication and prevents multiple users from purchasing a parking spot at the same time (race condition)",
      "Implemented dynamic pricing based on the time of the day (higher pricing during peak hours)"
    ],
  },

  {
    id: 4,
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
      "loem",
    ],
  },


  {
    id: 5,
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
      "fxixx",
    ],
  },

  {
    id: 6,
    title: "Peer-to-Peer Application",
    description:
      "A Peer-to-Peer (P2P) file-sharing application using socket programming.",
    image: p2p_3peersDownload,
    tags: [
      { name: "C", color: "#f7781eff" },
      { name: "Computer Networking", color: "#7e7e7eff" },
    ],
    github: "https://github.com/marcus-justice31/Peer-to-Peer-Application",
    details: [
      "fxixx",
    ],
  },

  {
    id: 7,
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