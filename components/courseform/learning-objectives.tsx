import React from 'react';
import { Plus, X } from 'lucide-react';
import { useFormContext, FieldArrayWithId } from 'react-hook-form';
import { Input } from '../ui/input';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';
import { Card , CardHeader,CardTitle , CardContent } from '../ui/card';
import { Button } from '../ui/button';

interface LearningObjectivesProps {
  name: string; // The field name for the objectives array (e.g., "learningObjectives")
}

export function LearningObjectives({ name }: LearningObjectivesProps) {
const form = useFormContext();
  const objectives = form.watch(name) as string[];

  return (
    <Card className="space-y-4">
      {/* Header */}
      <CardHeader className="flex justify-between flex-row ">
        <CardTitle >
          What You'll Learn
        </CardTitle>
        <Button
          type="button"
          onClick={() =>
            form.setValue(name, [...objectives, '']) // Add a new empty objective
          }
          className="flex  items-center space-x-2 "
          aria-label="Add a learning objective"
        >
          <Plus size={20} />
          <span>Add Objective</span>
        </Button>
      </CardHeader>

      {/* Objectives List */}
      <CardContent>
      <div className="space-y-3">
        {objectives.map((objective, index) => (
          <FormField
            key={index}
            control={form.control}
            name={`${name}.${index}`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{`Objective ${index+1}`}</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Input
                      {...field}
                      placeholder="Enter learning objective"
                      aria-label={`Learning objective ${index + 1}`}
                      className="flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updatedObjectives = [...objectives];
                        updatedObjectives.splice(index, 1); // Remove the objective at this index
                        form.setValue(name, updatedObjectives);
                      }}
                      className="p-2 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                      aria-label={`Remove learning objective ${index + 1}`}
                    >
                      <X size={20} />
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
      </CardContent>
      
    </Card>
  );
}
