export const projects = [
  {
    id: 1,
    title: "Algorithmic Stock Trading System",
    description: "A basic system that simulates trading logic using custom-built algorithms.",
    details: `This project is a lightweight algorithmic trading simulator built in Python, designed to execute buy/sell decisions 
  using moving averages, crossover logic, and trend detection on historical stock data. I collaborated with a team 
  to build the system end-to-end, including a Flask-based backend, React frontend, and a modular architecture that 
  followed SOLID principles.

We implemented strategy, decorator, adapter, and publisher-subscriber design patterns to ensure flexibility and 
  maintainability. I contributed to feature development, GitHub collaboration, and CI/CD integration using AWS.

The system supports multiple trading strategies (SMA, MACD, Bollinger Bands), outputs performance metrics and trade 
  logs, and visualizes activity on a web dashboard.

Challenges included tuning algorithm thresholds, structuring and validating large datasets from the Yahoo Finance 
  API, and ensuring clean separation of concerns between frontend, backend, and strategy logic.`,
    image: "/images/project1.jpg",
    link: "https://github.com/GabrieliusGintalas/CPSC362-AutomatedStockTrading",
    file: "/Project1Doc.pdf"
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "My personal website built using React and Framer Motion.",
    details: `This project was my introduction to modern web development. I used React.js + Vite with 
  Tailwind CSS and Framer Motion for page transitions and animations. 

The site is fully responsive, mobile-friendly, and features a clean design showcasing my 
  resume, projects, and background. 

This project helped me learn core frontend principles, UI structure, and React component logic.

Major takeaways included learning layout systems, managing state, and deploying to Vercel.`,
    image: "/images/project2.jpg",
    link: "https://github.com/DmitryBozhko/Portfolio"
  },
  {
    id: 3,
    title: "Team Meeting Scheduler",
    description: "A command-line tool for finding common free time across multiple team members.",
    details: `This project was built in C++ and designed to parse schedules for multiple users from an input file, 
  identify their individual free time slots, and compute overlapping availability to suggest meeting times. 
  It supports working hour constraints, flexible meeting durations, and merges overlapping intervals to optimize 
  results. 

The program outputs available time windows to a separate file and includes edge case handling like 
  - back-to-back meetings, 
  - all-day availability,
  - empty schedules. 

I learned how to work with time-based logic, file parsing, and interval merging. 

One of the major challenges was accurately handling edge cases and ensuring consistent formatting across outputs.`,
    image: "/images/project3.jpg",
    link: "https://github.com/DmitryBozhko/335Project2"
  },
  
  {
    id: 4,
    title: "In-Memory Filesystem in Rust",
    description: "A Rust-based in-memory filesystem with block storage, journaling and undo capability.",
    details: `This project implements a simple in-memory filesystem in Rust, featuring:

    - Inode and block storage abstractions with fixed block size

    - Journaling of operations 
        - create directory
        - create file
        - add file to directory
        - write to file

    - Undo functionality by replaying the inverse of the last journal entry

    - Directory listing, file read/write, and clean separation of concerns

    - Usage of Rust enums, HashMap, and ownership to model filesystem state
  
I designed and coded the entire architecture, focusing on correctness of journal commit/rollback logic, safe 
  memory handling, and clear separation between filesystem metadata (inodes) and data blocks. 

Challenges included serializing the old file data into the journal for undo, and ensuring block cleanup on writes.`,
    image: "/images/project4.jpg",
    link: "https://github.com/DmitryBozhko/RustFileSystem"
  },
  {
    id: 5,
    title: "Custom Linux Shell in C",
    description: "A lightweight Unix-style command interpreter written in C",
    details: `This project implements a minimal shell (“bash”-lite) in C, featuring:

    - Parsing of user input into commands, arguments, and special tokens (|, >, ECHO, SPECHO)

    - Built-in support for cd, mkdir, help, exit, and “!!” to repeat the last command

    - Execution of external programs via fork()/execvp() with proper parent/child synchronization

    - I/O redirection (‘>’) and single-pipe support, handling multiple pipeline stages

    - Custom “ECHO” and “SPECHO” modes that parse and print words, spaces, and PIPE markers on separate lines

    - Maintenance of last_command buffer for command re-run functionality
  
I designed the lexer/parser by splitting on spaces and special characters, then implemented process control with 
  Unix system calls (fork, execvp, wait). 
  
Challenges included correctly wiring pipe file descriptors, handling edge 
  cases in built-ins vs. external commands, and preserving command history for “!!”.`,
    image: "/images/project5.jpg",
    link: "https://github.com/DmitryBozhko/LinuxShell"
  }
];