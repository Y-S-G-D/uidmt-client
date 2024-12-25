import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardTitle,CardHeader ,CardContent } from '../ui/card';

export function BasicInfo() {
  const form = useFormContext(); // Access the form context from the parent

  return (
    <Card className="space-y-6 my-10">
      <CardHeader>
      <CardTitle className="text-2xl font-semibold text-gray-900">Basic Information</CardTitle>

      </CardHeader>
      <CardContent>
      <div className="grid gap-6">
        {/* Course ID */}
        <FormField
          control={form.control}
          name="course_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="course_id">Course ID</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="course_id"
                  placeholder="e.g., C102"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Course Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="title">Course Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="title"
                  placeholder="e.g., Digital Marketing Ultimate Course Bundle"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Subtitle */}
        <FormField
          control={form.control}
          name="subtitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="subtitle">Subtitle</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="subtitle"
                  placeholder="e.g., 12 Courses in 1 (Over 36 hours of content)"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="description">Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id="description"
                  placeholder="Enter a detailed course description..."
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      </CardContent>
      
    </Card>
  );
}
