export interface IFAQ {
  id: string;
  question: string;
  answer: string;
}

const myFAQs = [
  {
    id: "adsf",
    question:
      "How do you ensure the security of web applications in your development process?",
    answer:
      "Security is a top priority in my development process. I follow best practices such as input validation, parameterized queries to prevent SQL injection, and using HTTPS to ensure data transmission security. I also implement authentication and authorization mechanisms, employ secure session management, and regularly update dependencies to mitigate vulnerabilities. By adopting these measures, I ensure the web applications I create are robust and secure.",
  },
  {
    id: "af4agra",
    question:
      "How do you approach optimizing the performance of web applications?",
    answer:
      "Optimizing performance is crucial for delivering a great user experience. I focus on various aspects such as minimizing server response times, leveraging browser caching, and optimizing images to reduce load times. Additionally, I employ techniques like code splitting and lazy loading to improve initial page load speed. Regular performance audits using tools like Lighthouse help me identify bottlenecks and make data-driven optimizations",
  },
  {
    id: "hhadsfhio",
    question:
      "How do you stay updated with the latest trends in full stack development?",
    answer:
      "Staying updated is essential in the fast-paced tech industry. I am an avid learner and consistently invest time in professional development. I actively follow industry blogs, attend webinars, and participate in online communities like Stack Overflow and GitHub. By keeping my skills current, I ensure that I can leverage the latest tools, technologies, and best practices to deliver innovative solutions.",
  },
];

export default myFAQs;
