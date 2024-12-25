import { z } from 'zod';

const lessonSchema = z.object({
  lesson_id: z.string(),
  title: z.string().min(1, 'Title is required'),
  type: z.enum(['Video', 'Text']),
  content_url: z.string().url().optional(),
  content: z.string().optional(),
  duration: z.string().optional(),
  resources: z.array(z.string())
});

const moduleSchema = z.object({
  module_id: z.string(),
  title: z.string().min(1, 'Module title is required'),
  lessons: z.array(lessonSchema)
});

export const courseSchema = z.object({
  course_id: z.string().min(1, 'Course ID is required'),
  title: z.string().min(1, 'Title is required'),
  subtitle: z.string().min(1, 'Subtitle is required'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  learningObjectives: z.array(z.string().min(1, 'Learning objective is required')),
  price: z.object({
    current_price: z.number().min(0, 'Price must be positive'),
    original_price: z.number().min(0, 'Price must be positive'),
    discount_percentage: z.number().min(0).max(100).optional(),
    discount_deadline: z.string().optional()
  }),
  trial: z.object({
    is_available: z.boolean(),
    type: z.string()
  }),
  course_includes: z.object({
    lectures: z.number().min(1, 'At least one lecture is required'),
    duration: z.string().min(1, 'Duration is required'),
    skills_level: z.string().min(1, 'Skill level is required'),
    language: z.string().min(1, 'Language is required'),
    deadline: z.string()
  }),
  thumbnail: z.string().url('Invalid thumbnail URL'),
  video_preview: z.string().url('Invalid video URL'),
  modules: z.array(moduleSchema).min(1, 'At least one module is required'),
  settings: z.object({
    comments_enabled: z.boolean(),
    certification_enabled: z.boolean(),
    visibility: z.enum(['Draft', 'Published', 'Private'])
  }),
  seo: z.object({
    meta_title: z.string().min(1, 'Meta title is required'),
    meta_description: z.string().min(1, 'Meta description is required'),
    keywords: z.array(z.string())
  })
});

export type CourseFormData = z.infer<typeof courseSchema>;