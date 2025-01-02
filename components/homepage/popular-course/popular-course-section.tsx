import { useState } from 'react';
import CategoryTabs from './category-tab'
import CourseCard from './course-card';

const categories = ['Web Design', 'Development', 'Graphic Design', 'Marketing', 'Finance'];

const courses = [
  {
    id: 1,
    title: 'Sketch from A to Z: for app designer',
    description: 'Proposal indulged no do sociable he throwing settling.',
    level: 'All level',
    rating: 4.0,
    duration: '12h 56m',
    lectures: 15,
    image: '/sketch.jpg',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Graphic Design Masterclass',
    description: 'Rooms oh fully taken by worse do. Points afraid but may end.',
    level: 'Beginner',
    rating: 4.5,
    duration: '9h 56m',
    lectures: 65,
    image: '/photoshop.jpg',
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Create a Design System in Figma',
    description: 'Rooms oh fully taken by worse do. Points afraid but may end afraid but.',
    level: 'Beginner',
    rating: 4.5,
    duration: '5h 56m',
    lectures: 32,
    image: '/figma1.jpg',
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Deep Learning with React-Native',
    description: 'Far advanced settling say finished raillery. Offered chiefly farther.',
    level: 'Beginner',
    rating: 4.0,
    duration: '18h 56m',
    lectures: 99,
    image: '/react-image.jpg',
    isFavorite: true,
  },
];

export default function PopularCourseSection() {
  const [activeCategory, setActiveCategory] = useState('Web Design');
  
  return (
    <div className="min-h-screen  px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Most Popular Courses
          </h1>
          <p className="text-gray-400 text-lg">
            Choose from hundreds of courses from specialist organizations
          </p>
        </div>

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}