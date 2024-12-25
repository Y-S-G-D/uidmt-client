"use client";
import { BasicInfo } from "@/components/courseform/basic-info";
import { CourseIncludes } from "@/components/courseform/course-includes-fields";
import { LearningObjectives } from "@/components/courseform/learning-objectives";
import { PricingInfo } from "@/components/courseform/pricing-info-fields";
import { courseSchema } from "@/schema/course-schema";
import { CourseFormData } from "@/types/course-form";
import React from "react";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CourseImageCard from "@/components/courseform/course-image-card";
import { ChapterList } from "@/components/courseform/chapter-list";
import { ChapterForm } from "@/components/courseform/chapter-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoUpload } from "@/components/courseform/video-upload";

const AddCoursePage = () => {
  const form
   = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      learningObjectives: [''],
      modules: [],
      settings: {
        comments_enabled: true,
        certification_enabled: true,
        visibility: "Draft",
      },
    },
  });

  // const objectives = form.watch("what_you_will_learn");
  const modules = form.watch("modules");

  const onSubmit = async (data: CourseFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      // Show success message
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <FormProvider {...form}>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Course</h1>
        <p className="text-muted-foreground mt-1">
          Manage and organize your course catalog
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
       <BasicInfo/>
       <div className="grid grid-cols-2 gap-4 ">
       <LearningObjectives name="learningObjectives"/>
       <CourseImageCard/>
       </div>
       <PricingInfo/>
       
        <ChapterList/>
       <div className="flex gap-4 items-center my-8">
         <Button>
          Save
         </Button>
         <Button
          variant={'secondary'}
          >
            Cancel
         </Button>
       </div>

       {/* <ModuleSection/> */}
      </form>




      {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <div className="space-y-8">
              <BasicInfo register={register} errors={errors} />
              <hr className="border-gray-200 dark:border-gray-700" />
              <LearningObjectives
                objectives={objectives}
                onAdd={() => setValue('what_you_will_learn', [...objectives, ''])}
                onRemove={(index) => setValue('what_you_will_learn', objectives.filter((_, i) => i !== index))}
                onChange={(index, value) => {
                  const newObjectives = [...objectives];
                  newObjectives[index] = value;
                  setValue('what_you_will_learn', newObjectives);
                }}
              />
              <hr className="border-gray-200 dark:border-gray-700" />
              <PricingInfo register={register} errors={errors} />
              <hr className="border-gray-200 dark:border-gray-700" />
              <CourseIncludes register={register} errors={errors} />
            </div>
          </Card>

          <Card>
            <ModuleSection
              modules={modules}
              onModuleAdd={() => {
                setValue('modules', [
                  ...modules,
                  {
                    module_id: `M${modules.length + 1}`,
                    title: '',
                    lessons: [],
                  },
                ]);
              }}
              onModuleRemove={(index) => {
                setValue('modules', modules.filter((_, i) => i !== index));
              }}
              onModuleChange={(index, module) => {
                const newModules = [...modules];
                newModules[index] = module;
                setValue('modules', newModules);
              }}
              onLessonAdd={(moduleIndex) => {
                const newModules = [...modules];
                newModules[moduleIndex].lessons.push({
                  lesson_id: `L${newModules[moduleIndex].lessons.length + 1}`,
                  title: '',
                  type: 'Video',
                  resources: [],
                });
                setValue('modules', newModules);
              }}
              onLessonRemove={(moduleIndex, lessonIndex) => {
                const newModules = [...modules];
                newModules[moduleIndex].lessons = newModules[moduleIndex].lessons.filter(
                  (_, i) => i !== lessonIndex
                );
                setValue('modules', newModules);
              }}
              onLessonChange={(moduleIndex, lessonIndex, lesson) => {
                const newModules = [...modules];
                newModules[moduleIndex].lessons[lessonIndex] = lesson;
                setValue('modules', newModules);
              }}
            />
          </Card>

          <Card>
            <div className="space-y-8">
              <Settings register={register} watch={watch} />
              <hr className="border-gray-200 dark:border-gray-700" />
            </div>
          </Card>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Creating...' : 'Create Course'}
            </button>
          </div>
        </form> */}
    </FormProvider>
  );
};

export default AddCoursePage;
