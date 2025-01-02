export interface Course {
    id: number;
    title: string;
    category: string;
    level: string;
    rating: number;
    reviews: number;
    price: number;
    duration: string;
    lectures: number;
    instructor: {
      name: string;
      image: string;
    };
    image: string;
    status: string;
  }
  
  export const courses: Course[] = [
    {
      id: 1,
      title: "Time Management Mastery: Do More, Stress Less",
      category: "Design",
      level: "Beginner",
      rating: 4.5,
      reviews: 2000,
      price: 8000,
      duration: "24h 56m",
      lectures: 55,
      instructor: {
        name: "Lori Stevens",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
      },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      status: "Add to cart"
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      level: "Intermediate",
      rating: 4.8,
      reviews: 3500,
      price: 1200,
      duration: "15h 30m",
      lectures: 42,
      instructor: {
        name: "Sarah Johnson",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
      },
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop",
      status: "Add to cart"
    },
    {
      id: 3,
      title: "The Complete Digital Marketing Course",
      category: "Marketing",
      level: "Beginner",
      rating: 4.5,
      reviews: 6500,
      price: 0,
      duration: "6h 56m",
      lectures: 82,
      instructor: {
        name: "Larry Lawson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
      },
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      status: "Free"
    },
    {
      id: 4,
      title: "Advanced JavaScript Programming",
      category: "Development",
      level: "Advanced",
      rating: 4.9,
      reviews: 4200,
      price: 1500,
      duration: "28h 20m",
      lectures: 95,
      instructor: {
        name: "Mike Chen",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
      },
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      status: "Add to cart"
    },
    {
      id: 5,
      title: "Photography Masterclass",
      category: "Photography",
      level: "Intermediate",
      rating: 4.7,
      reviews: 2800,
      price: 900,
      duration: "12h 45m",
      lectures: 38,
      instructor: {
        name: "Emma Wilson",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
      },
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
      status: "Add to cart"
    },
    {
      id: 6,
      title: "Data Science Fundamentals",
      category: "Data Science",
      level: "Beginner",
      rating: 4.6,
      reviews: 3100,
      price: 1100,
      duration: "20h 15m",
      lectures: 65,
      instructor: {
        name: "David Kim",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      status: "Add to cart"
    }
  ];