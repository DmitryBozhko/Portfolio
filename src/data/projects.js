export const projects = [
  {
    id: 1,
    title: "Algorithmic Stock Trading System",
    description: "A basic system that simulates trading logic using custom-built algorithms.",
    details: `This project is a lightweight algorithmic trading simulator built in Python, designed to execute buy/sell decisions using moving averages, crossover logic, and trend detection on historical stock data. I collaborated with a team to build the system end-to-end, including a Flask-based backend, React frontend, and a modular architecture that followed SOLID principles.
    We implemented strategy, decorator, adapter, and publisher-subscriber design patterns to ensure flexibility and maintainability. I contributed to feature development, GitHub collaboration, and CI/CD integration using AWS.
    The system supports multiple trading strategies (SMA, MACD, Bollinger Bands), outputs performance metrics and trade logs, and visualizes activity on a web dashboard.
    Challenges included tuning algorithm thresholds, structuring and validating large datasets from the Yahoo Finance API, and ensuring clean separation of concerns between frontend, backend, and strategy logic.`,
    image: "/images/project1.jpg",
    link: "https://github.com/GabrieliusGintalas/CPSC362-AutomatedStockTrading",
    file: "/Project1Doc.pdf"
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "My personal website built using React and Framer Motion.",
    details: `This project was my introduction to modern web development. 
    I used React.js + Vite with Tailwind CSS and Framer Motion for page transitions and animations. 
    The site is fully responsive, mobile-friendly, and features a clean design showcasing my resume, projects, and background. 
    This helped me learn core frontend principles, UI structure, and React component logic.
    Major takeaways included learning layout systems, managing state, and deploying to Vercel.`,
    image: "/images/project2.jpg",
    link: "https://github.com/DmitryBozhko/Portfolio"
  },
  {
    id: 3,
    title: "FAT32 File System Emulator",
  description: "A command-line FAT32 file system emulator written in C++.",
  details: `This project was built for an operating systems course and simulates a simplified FAT32 file system using C++. 
  It supports common file system commands such as ls, cd, mkdir, open, read, write, and rm within a virtual disk environment. 
  I learned how file systems manage data at a low level, including block allocation, directory traversal, and file descriptor tracking. 
  The project emphasized pointer manipulation, memory layout, and maintaining consistency between the FAT and directory structures.
  Major takeaways included system-level design, recursive path resolution, and simulating real-world OS behavior.
  One of the major challenges I faced building this system was implementing support for command piping and redirection operators (like | and >), which required parsing and managing inter-process behavior within the emulator.`,
  image: "/images/project3.jpg",
  link: "https://github.com/DmitryBozhko/335Project2"
  }
];