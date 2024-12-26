// "use client";

// import { BlogCardProps } from "@/types/blog";
// import { Calendar, Clock } from "lucide-react";
// import Link from "next/link";

// export function BlogCard({ post }: BlogCardProps) {
//   return (
//     <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//       <Link href={`/blog/${post.id}`}>
//         <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
//       </Link>
//       <div className="p-6">
//         <div className="flex items-center gap-4 mb-4">
//           <div className="flex items-center gap-2">
//             <Calendar className="h-4 w-4 text-muted-foreground" />
//             <span className="text-sm text-muted-foreground">
//               {new Date(post.publishedAt).toLocaleDateString()}
//             </span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Clock className="h-4 w-4 text-muted-foreground" />
//             <span className="text-sm text-muted-foreground">{post.readTime} min read</span>
//           </div>
//         </div>
        
//         <Link href={`/blog/${post.id}`} className="group">
//           <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
//             {post.title}
//           </h3>
//         </Link>
//         <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        
//         <div className="flex items-center gap-3">
//           <img
//             src={post.author.avatar}
//             alt={post.author.name}
//             className="h-8 w-8 rounded-full"
//           />
//           <span className="text-sm font-medium">{post.author.name}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Clock, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-4 left-4 ">
            {post.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{post.description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <User size={16} />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{post.readTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
}