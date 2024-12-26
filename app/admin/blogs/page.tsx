'use client'
import { blogPosts } from "@/lib/blog-posts";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AdminBlogsView() {
    const router = useRouter();
  return (
    <main className="min-h-screen py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blogs</h1>
          <p className="text-lg text-muted-foreground ">
            Discover the latest insights, tutorials, and stories from our blog.
          </p>
        </div>
        <Button
          onClick={() => {
            router.push("/admin/add-blog");

          }}
          >
            Add New Blog
        </Button>

        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
