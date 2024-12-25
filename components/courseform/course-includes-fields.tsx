import React from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '../ui/select';

interface CourseIncludesProps {
  register: any;
  errors: any;
}

export function CourseIncludes({ register, errors }: CourseIncludesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Course Details</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          type="number"
          label="Number of Lectures"
          {...register('course_includes.lectures', { required: 'Number of lectures is required' })}
          error={errors.course_includes?.lectures?.message}
        />
        <Input
          label="Duration"
          {...register('course_includes.duration', { required: 'Duration is required' })}
          error={errors.course_includes?.duration?.message}
          placeholder="e.g., 4h 50m"
        />
        <Select
          label="Skill Level"
          {...register('course_includes.skills_level')}
          options={[
            { value: 'Beginner', label: 'Beginner' },
            { value: 'Intermediate', label: 'Intermediate' },
            { value: 'Advanced', label: 'Advanced' },
          ]}
        />
        <Select
          label="Language"
          {...register('course_includes.language')}
          options={[
            { value: 'English', label: 'English' },
            { value: 'Spanish', label: 'Spanish' },
            { value: 'French', label: 'French' },
          ]}
        />
      </div>
    </div>
  );
}