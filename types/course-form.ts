export interface Lesson {
    lesson_id: string;
    title: string;
    type: 'Video' | 'Text';
    content_url?: string;
    content?: string;
    duration?: string;
    resources: string[];
  }
  
  export interface Module {
    module_id: string;
    title: string;
    lessons: Lesson[];
  }
  
  export interface CourseFormData {
    course_id: string;
    title: string;
    subtitle: string;
    description: string;
    learningObjectives: string[];
    price: {
      current_price: number;
      original_price: number;
      discount_percentage?: number;
      discount_deadline?: string;
    };
    trial: {
      is_available: boolean;
      type: string;
    };
    course_includes: {
      lectures: number;
      duration: string;
      skills_level: string;
      language: string;
      deadline: string;
    };
    thumbnail: string;
    video_preview: string;
    modules: Module[];
    settings: {
      comments_enabled: boolean;
      certification_enabled: boolean;
      visibility: string;
    };
    seo: {
      meta_title: string;
      meta_description: string;
      keywords: string[];
    };
  }