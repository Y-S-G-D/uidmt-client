// "use client";

// import { BlogCard } from "@/components/blog/blog-card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { blogPosts } from "@/lib/blog-posts"
// import { Search } from "lucide-react";
// import { useState } from "react";

// export default function BlogPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   const filteredPosts = blogPosts.filter((post) => {
//     const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()
//     );
//     const matchesCategory = !selectedCategory || post.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-3xl mx-auto text-center mb-12">
//         <h1 className="text-4xl font-bold mb-4">Blog</h1>
//         <p className="text-xl text-muted-foreground">
//           Latest insights, tutorials, and industry updates from our experts
//         </p>
//       </div>
      
//       <div className="flex flex-col md:flex-row gap-4 mb-8">
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//           <Input
//             placeholder="Search articles..."
//             className="pl-10"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//         <div className="flex gap-2 flex-wrap">
//           <Button
//             variant={selectedCategory === null ? "default" : "outline"}
//             onClick={() => setSelectedCategory(null)}
//           >
//             All
//           </Button>
//           <Button
//             variant={selectedCategory === "Digital Marketing" ? "default" : "outline"}
//             onClick={() => setSelectedCategory("Digital Marketing")}
//           >
//             Digital Marketing
//           </Button>
//           <Button
//             variant={selectedCategory === "Web Development" ? "default" : "outline"}
//             onClick={() => setSelectedCategory("Web Development")}
//           >
//             Web Development
//           </Button>
//           <Button
//             variant={selectedCategory === "Career Tips" ? "default" : "outline"}
//             onClick={() => setSelectedCategory("Career Tips")}
//           >
//             Career Tips
//           </Button>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredPosts.map((post) => (
//           <BlogCard key={post.id} post={post} />
//         ))}
//       </div>

//       {filteredPosts.length === 0 && (
//         <div className="text-center py-12">
//           <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
//         </div>
//       )}
//     </div>
//   );
// }
import React from 'react'

const BlogPage = () => {
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage