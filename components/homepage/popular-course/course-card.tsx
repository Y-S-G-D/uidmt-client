import { FC } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  rating: number;
  duration: string;
  lectures: number;
  image: string;
  isFavorite?: boolean;
}

const CourseCard: FC<CourseCardProps> = ({
  title,
  description,
  level,
  rating,
  duration,
  lectures,
  image,
  isFavorite = false,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <button className="absolute top-4 right-4">
          {isFavorite ? (
            <AiFillHeart className="text-red-500 text-2xl" />
          ) : (
            <AiOutlineHeart className="text-white text-2xl" />
          )}
        </button>
      </div>
      
      <div className="p-4">
        <span className="text-green-400 text-sm">{level}</span>
        <h3 className="text-white text-xl font-semibold mt-2">{title}</h3>
        <p className="text-gray-400 mt-2 text-sm line-clamp-2">{description}</p>
        
        <div className="flex items-center mt-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}>
              ★
            </span>
          ))}
          <span className="text-white ml-2">{rating}/5.0</span>
        </div>
        
        <div className="flex items-center justify-between mt-4 text-gray-400 text-sm">
          <div className="flex items-center">
            <BiTime className="mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <HiOutlineAcademicCap className="mr-1" />
            {lectures} lectures
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;