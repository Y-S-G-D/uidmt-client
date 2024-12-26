'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useForm, Controller } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'; // Update the path to match your components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Upload from '@/components/blog/upload'; // Assume this is a custom file upload component in your project
import { TagInput } from '@/components/blog/tag-input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Blog data interface
interface BlogData {
  title: string;
  description: string;
  tags: string[];
  thumbnail: File | null;
  content: string;
}

const AddBlog: React.FC = () => {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (newTag: string) => {
    if (!tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };

  const handleRemoveTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };


  const form = useForm<BlogData>({
    defaultValues: {
      title: '',
      description: '',
      tags: [],
      thumbnail: null,
      content: '',
    },
  });

  const onSubmit = async (data: BlogData) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('tags', data.tags.join(','));
    if (data.thumbnail) formData.append('thumbnail', data.thumbnail);
    formData.append('content', data.content);

    const response = await fetch('/api/blog', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Blog added successfully!');
      form.reset();
      setThumbnailPreview(null);
    } else {
      alert('Failed to add blog');
    }
  };

  const handleThumbnailChange = (file: File | null) => {
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
      form.setValue('thumbnail', file);
    } else {
      setThumbnailPreview(null);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Add New Blog</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit) } className="space-y-6">
        <FormField 
  name="title" 
  control={form.control}
  render={({ field }) => (
    <FormItem>
      <FormLabel>Blog Title</FormLabel>
      <FormControl>
        <Input {...field} placeholder="Enter blog title" />
      </FormControl>
      <FormMessage>{form.formState.errors.title?.message}</FormMessage>
    </FormItem>
  )}
/>

<FormField name="description" control={form.control} render={({ field }) => (
  <FormItem>
    <FormLabel>Blog Description</FormLabel>
    <FormControl>
      <Textarea {...field} placeholder="Enter a short description" />
    </FormControl>
    <FormMessage>{form.formState.errors.description?.message}</FormMessage>
  </FormItem>
)} />
   <div className='flex gap-4'>
   <TagInput
        tags={tags}
        onAddTag={handleAddTag}
        onRemoveTag={handleRemoveTag}
      />
       
       <Card className='w-1/2'>
        <CardHeader>
            <CardTitle>
                Blog Thumbnail 
            </CardTitle>
        </CardHeader>
        <CardContent>
        <FormField name="thumbnail" control={form.control} render={({ field }) => (
  <FormItem>
    {/* <FormLabel>Thumbnail</FormLabel> */}
    <FormControl>
      <Upload
        accept="image/*"
        onChange={(file: File | null) => handleThumbnailChange(file)}
      />
      
    </FormControl>
    <FormMessage>{form.formState.errors.thumbnail?.message}</FormMessage>
  </FormItem>
)} />
        </CardContent>
       </Card>
     


      
   </div>

{/* <FormField name="tags" control={form.control} render={({ field }) => (
  <FormItem>
    <FormLabel>Tags</FormLabel>
    <FormControl>
      <Input
        {...field}
        placeholder="Enter tags separated by commas"
        onChange={(e) => {
          const tags = e.target.value.split(',').map((tag) => tag.trim());
          form.setValue('tags', tags);
        }}
      />
    </FormControl>
    <FormMessage>{form.formState.errors.tags?.message}</FormMessage>
  </FormItem> */}
{/* )} /> */}


<FormField name="content" control={form.control} render={({ field }) => (
  <FormItem>
    <FormLabel>Content</FormLabel>
    <FormControl>
      <Controller
        name="content"
        control={form.control}
        render={({ field }) => (
          <ReactQuill
            value={field.value}
            onChange={field.onChange}
            className="mt-4"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            formats={[
              'header',
              'bold',
              'italic',
              'underline',
              'strike',
              'list',
              'bullet',
              'link',
              'image',
            ]}
          />
        )}
      />
    </FormControl>
    <FormMessage>{form.formState.errors.content?.message}</FormMessage>
  </FormItem>
)} />

        </form>
      
        <Button type="submit" className="mt-6 bg-blue-500 text-white">
          Submit Blog
        </Button>
      </Form>
    </div>
  );
};

export default AddBlog;
