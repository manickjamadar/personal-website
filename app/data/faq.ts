export interface IFAQ {
  id: string;
  question: string;
  answer: string;
}

const myFAQs: IFAQ[] = [
  {
    id: "selftaught",
    question: "Are you a self taught Developer?",
    answer:
      "Yes, I am a self-taught developer. My passion for programming led me to learn through online resources, books, and practical projects. This hands-on approach has given me a strong foundation in coding and problem-solving.",
  },
  {
    id: "advice",
    question: "What advice do you have for other self-taught developers?",
    answer:
      "My advice is to be patient and persistent. Learning to code is a journey, not a destination. Set clear goals, break projects into manageable steps, and don't shy away from seeking help when needed. Leverage online communities, learn from failures, and most importantly, enjoy the process of learning and creating.",
  },
  {
    id: "productivity",
    question: "How do you maintain such high productivity as a developer?",
    answer:
      "Productivity is a priority for me. I plan my work using techniques like time blocking and Pomodoro. I break tasks into smaller, manageable chunks and set clear goals. By maintaining a focused work environment and minimizing distractions, I'm able to consistently deliver quality code efficiently.",
  },
  // {
  //   id: "dsa",
  //   question: "What's your familiarity with data structures and algorithms?",
  //   answer:
  //     "I have a strong foundation in data structures and algorithms. I've solved coding challenges on platforms like LeetCode and HackerRank, and I apply this knowledge to write efficient and optimized code for tasks like searching, sorting, and more.",
  // },
  {
    id: "quality",
    question: "How do you ensure the quality of your code?",
    answer:
      "Quality assurance is essential. I write clean, well-documented code and conduct thorough testing, including unit tests, integration tests, and sometimes end-to-end tests. Continuous integration tools like Github Actions help automate this process.",
  },
  {
    id: "version",
    question: "Can you explain your experience with version control systems?",
    answer:
      "Absolutely. I use Git for version control, which helps track changes, collaborate with others, and easily revert to previous states if needed. I'm comfortable with branching, merging, and resolving conflicts, ensuring smooth collaboration.",
  },
  {
    id: "debug",
    question: "How do you approach debugging and troubleshooting?",
    answer:
      "Debugging requires a methodical approach. I use logging, debugging tools like Chrome DevTools, and automated tests to identify and fix issues efficiently. I also believe in systematic problem-solving and leveraging online developer communities when needed.",
  },
  {
    id: "tdd",
    question: "Are you experienced in test-driven development (TDD)?",
    answer:
      "Yes, I love TDD. Writing tests before implementing code helps ensure better code coverage and design. It also helps catch issues early in the development cycle and encourages modular, testable code architecture.",
  },
  {
    id: "optimize",
    question: "What's your approach to optimizing website performance?",
    answer:
      "I use a variety of tools and techniques to optimize website performance, including caching, image optimization, minification, and lazy loading. I also use tools like Lighthouse to analyze and enhance the website's loading speed and responsiveness.",
  },
  {
    id: "document",
    question: "Can you discuss your approach to code documentation?",
    answer:
      "Documentation is essential for code maintainability. I believe in writing self-explanatory code and supplementing it with clear inline comments. I also create README files that provide usage instructions, project structure, and any prerequisites.",
  },
  {
    id: "realtime",
    question: "Have you worked on real-time applications?",
    answer:
      "I've developed real-time applications using technologies like WebSockets and socket.io. These technologies enable bidirectional communication between clients and servers, making it possible to deliver live updates in applications.",
  },
  {
    id: "contact",
    question: "How can I get in touch with you?",
    answer:
      "I'd love to hear from you! You can reach me by sending an email to contact@manickjamadar.com. Additionally, you can book meeting with me here: https://calendly.com/manickjamadar/meet-with-manick",
  },
];

export default myFAQs;
