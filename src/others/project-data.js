export const projects = [
  {
    id: 1,
    platform: "Web",
    projectTitle: "React Online Store",
    projectDescription: [
      "This project is an online web store developed with React.js as the framework and the browsers local storage to cache the users cached data like 'Shopping Address' and 'Cart Details'.",
      "It is developed with best React state management principles and design patterns for faster, network and processor optimized system.",
      "It is been developed while considering about concepts like React's baching and when handling complex data types like arrays and objects in states, to not mutate states thus reducing unnecessary performance complexities via using function form of setStates or by using more advanced hooks like React's useReducer hook.",
      "React's life cycle methods are carefully handled by using component mount, unmount or component update scenario's and prevented possible memory leakes with 'cleanUp' functions.",
      "Further more React's Context API is used to pass data within the application and along with this custom hooks are developed for external tasks like reading and writing to storage and both been implemented in a centralized way so that all components which needs these services can access it.",
    ],
    technologies: [
      "React.js",
      "Web Storage",
      "Local Storage",
      "CSS",
      "Javascript",
    ],
    concepts: [
      "React Batching",
      "Javascript object and array mutations",
      "React Hooks [useState, useEffect, useContext, useReducer, useMemo, useRef etc] and custom hooks",
      "React Life Cycle methods [component mount, component unmount, component update]",
      "Reading and Writing data on Browsers Local Storage",
    ],
    sliderData: [
      {
        image: "images/Products.png",
      },
      {
        image: "images/Shoes.png",
      },
      {
        image: "images/Gym.png",
      },
      {
        image: "images/Fitness.png",
      },
      {
        image: "images/Detail.png",
      },
      {
        image: "images/Cart1.png",
      },
      {
        image: "images/Cart2.png",
      },
      {
        image: "images/Shopping.png",
      },
    ],
    videoPath: "images/React-Store.mp4",
    repoLink: "https://github.com/mohamed-nawas/fitness-care",
  },
  {
    id: 2,
    platform: "Mobile",
    projectTitle: "iConnect Social App",
    projectDescription: [
      "This project is a full featured simulation of a social media application on mobile platforms developed with React Native and Google cloud Firebase firestore database with awesome UI/UX.",
      "This project focuses on mobile application functionalities like simplicity, fast, security, push notifications and database functionalities like authentication, storage, real time updates and social media application functionalities like real time messaging, detecting user presence, connecting and engaging with fellow users in the application with a variety of interactive ways like stories, status, posts, videos, images, sharing, likes, comments and many more.",
      "Users can register and log into the application via a generic mail and password combo or from other external accounts like google etc. The application uses Firebase firestore database authentication service to perform these operation.",
      "Once users are registered and logged into the application, they can do a variety of things like customizing their user profile, following other users or friends in the application, updating stories and status, updating posts, connect and interact with your friends and collegues via posts, stories, chat messaging services etc.",
      "The project uses Firebase firestore database storage, cloud messaging and real time database services to perform these operations.",
    ],
    technologies: [
      "React Native",
      "Firebase Firestore",
      "React Native Async Storage",
      "React Navigation [Stack, Bottom Tabs]",
      "React Native Gifted Chat",
      "React Native Bootsplash",
      "React Native Image Picker",
      "React Native Onboarding",
      "React Native Bottom Sheet",
      "React Native SVG",
    ],
    concepts: [
      "React Native navigation",
      "React states",
      "React Native Stack, Bottom tab navigators",
    ],
    sliderData: [
      {
        image: "images/p3m1.png",
      },
      {
        image: "images/p3m2.png",
      },
      {
        image: "images/p3m3.png",
      },
      {
        image: "images/p3m4.png",
      },
      {
        image: "images/p3m5.png",
      },
      {
        image: "images/p3m6.png",
      },
      {
        image: "images/p3m7.png",
      },
      {
        image: "images/p3m8.png",
      },
      {
        image: "images/p3m9.png",
      },
      {
        image: "images/p3m10.png",
      },
      {
        image: "images/p3m11.png",
      },
      {
        image: "images/p3m12.png",
      },
      {
        image: "images/p3m13.png",
      },
      {
        image: "images/p3m14.png",
      },
      {
        image: "images/p3m15.png",
      },
    ],
    videoPath: "images/Social-App-Promo.mp4",
    repoLink: "https://github.com/mohamed-nawas/iConnect",
  },
  {
    id: 3,
    platform: "Mobile",
    projectTitle: "Shopping Store",
    projectDescription: [
      "This is a UI/UX development project named shopping store developed with React Native",
    ],
    technologies: ["React Native"],
    concepts: [
      "React Native navigation",
      "React states",
      "React Native Stack, Bottom tab navigators",
    ],
    sliderData: [
      {
        image: "images/Sneakers.png",
      },
      {
        image: "images/Backpacks.png",
      },
      {
        image: "images/Product.png",
      },
      {
        image: "images/Cart.png",
      },
      {
        image: "images/Profile.png",
      },
    ],
    videoPath: "images/App-Promo.mp4",
    repoLink: "https://github.com/mohamed-nawas/ShoppingStore",
  },
];
