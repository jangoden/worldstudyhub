import { Course } from "@/types/course";

const courseData: Course[] = [
  {
    id: 1,
    title: "Modern Web Development with React & Next.js",
    category: "Web Development",
    paragraph:
      "An in-depth guide to building fast, scalable, and modern web applications. From the fundamentals of React to advanced Next.js features, this course covers everything you need to know to become a professional web developer.",
    image: "/images/blog/blog-01.jpg",
    instructor: {
      name: "Deniro",
      image: "/images/testimonials/auth-01.png",
      designation: "Senior Software Engineer",
    },
    tags: ["react", "next.js", "webdev"],
    publishDate: "2025-01-15",
    duration: "12 Weeks",
    effort: "8-10 hours/week",
    prerequisites: ["Basic HTML, CSS, & JavaScript", "ES6+ knowledge recommended"],
    curriculum: [
      { title: "Module 1: Introduction to React", description: "Understanding components, props, and state." },
      { title: "Module 2: Advanced React Hooks", description: "Deep dive into useEffect, useContext, and custom hooks." },
      { title: "Module 3: Next.js Fundamentals", description: "App Router, server components, and file-based routing." },
      { title: "Module 4: Deployment and SEO", description: "Deploying your Next.js app to Vercel and optimizing for search engines." }
    ],
    price: 199.99,
    rating: 4.9,
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals for Beginners",
    category: "Design",
    paragraph:
      "Master the core principles of effective user interface and user experience design. This course will take you from the basics of user research to creating high-fidelity prototypes.",
    image: "/images/blog/blog-02.jpg",
    instructor: {
      name: "Jane Doe",
      image: "/images/testimonials/auth-02.png",
      designation: "Principal UI/UX Designer",
    },
    tags: ["ui", "ux", "design"],
    publishDate: "2025-02-20",
    duration: "8 Weeks",
    effort: "6-8 hours/week",
    prerequisites: ["No prior design experience needed"],
    curriculum: [
      { title: "Module 1: The Design Process", description: "Understanding user-centered design and research." },
      { title: "Module 2: Wireframing & Prototyping", description: "Creating low and high-fidelity prototypes with Figma." },
      { title: "Module 3: Visual Design Principles", description: "Typography, color theory, and layout." },
      { title: "Module 4: Usability Testing", description: "How to conduct and analyze usability tests." }
    ],
    price: 149.99,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Agile Project Management with Scrum",
    category: "Business",
    paragraph:
      "Learn how to increase your team's speed and efficiency with the proven Scrum methodology. This course is perfect for aspiring Scrum Masters and Product Owners.",
    image: "/images/blog/blog-03.jpg",
    instructor: {
      name: "John Smith",
      image: "/images/testimonials/auth-03.png",
      designation: "Certified Scrum Trainer",
    },
    tags: ["agile", "scrum", "project management"],
    publishDate: "2025-03-10",
    duration: "4 Weeks",
    effort: "5 hours/week",
    prerequisites: ["Basic understanding of project management concepts"],
    curriculum: [
      { title: "Module 1: The Agile Manifesto", description: "Core values and principles of Agile." },
      { title: "Module 2: Scrum Framework Roles", description: "Product Owner, Scrum Master, and Development Team." },
      { title: "Module 3: Scrum Events and Artifacts", description: "Sprint Planning, Daily Scrum, Sprint Review, and Retrospective." },
      { title: "Module 4: Scaling Scrum", description: "Introduction to LeSS and SAFe for larger organizations." }
    ],
    price: 249.99,
    rating: 4.7,
  },
];
export default courseData;