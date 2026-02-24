import mealDashboardImg from "../assets/banners/ai_meal_dashboard.png";
import smartSortingUiImg from "../assets/banners/smartsorting_ui.png";
import smartParkingImg from "../assets/banners/SmartParkingDashboard.png";

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
      "A a cloud-native, smart parking system that simulates IoT sensors to monitor parking space availability in real-time.",
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
      { name: "Git", color: "#2c3030ff" },
    ],
    github: "https://github.com/marcus-justice31/smart-parking-system",
    details: [
      "Built a responsive user interface in React with dynamic dashboards for both users and admins, supporting real-time updates and scalable system interaction",
      "Developed 10+ backend API endpoints for user authentication, dynamic pricing, wallet management, and admin controls, improving system scalability and usability",
    ],
  },
];

export default projects;