// import { BlogPost } from "@/types/blog";

// export const blogPosts: BlogPost[] = [
//   {
//     id: "digital-marketing-trends-2024",
//     title: "Top Digital Marketing Trends to Watch in 2024",
//     excerpt: "Discover the latest trends shaping the digital marketing landscape in 2024",
//     content: "The digital marketing landscape continues to evolve...",
//     author: {
//       name: "Sarah Johnson",
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//     },
//     category: "Digital Marketing",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     publishedAt: "2024-01-15",
//     readTime: 5
//   },
//   {
//     id: "web-development-best-practices",
//     title: "Modern Web Development Best Practices",
//     excerpt: "Learn the essential best practices for building modern web applications",
//     content: "In the ever-evolving world of web development...",
//     author: {
//       name: "Michael Chen",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//     },
//     category: "Web Development",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     publishedAt: "2024-01-10",
//     readTime: 7
//   },
//   {
//     id: "career-transition-tech",
//     title: "How to Transition into a Tech Career",
//     excerpt: "A comprehensive guide to switching careers and entering the tech industry",
//     content: "Making a career transition into tech can be challenging...",
//     author: {
//       name: "Emily Rodriguez",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//     },
//     category: "Career Tips",
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     publishedAt: "2024-01-05",
//     readTime: 6
//   }
// ];
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Exclusive: Get a First Look at the Fall Collection',
    description: 'Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
    image: 'https://images.unsplash.com/photo-1602934585418-f588bea4215c?auto=format&fit=crop&q=80',
    category: 'Lifestyle',
    author: 'John Doe',
    date: 'Dec 10, 2018',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'The Most Impressive London Streets',
    description: 'Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80',
    category: 'Lifestyle',
    author: 'John Doe',
    date: 'Dec 08, 2018',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'The Art of Modern Architecture',
    description: 'Discover the beauty and innovation behind contemporary architectural masterpieces that are reshaping our urban landscapes.',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80',
    category: 'Architecture',
    author: 'Jane Smith',
    date: 'Dec 05, 2018',
    readTime: '6 min read'
  }
];