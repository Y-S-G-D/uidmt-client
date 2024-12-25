import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/input';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';
import { Card,CardTitle,CardHeader,CardContent } from '../ui/card';

export function PricingInfo() {
  const { control } = useFormContext();

  return (
    <Card className="space-y-6 my-10">
      <CardHeader>
      <CardTitle >
        Pricing Information
      </CardTitle>
      
      </CardHeader>
      <CardContent>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Current Price */}
        <FormField
          control={control}
          name="price.current_price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Price (₹)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="Enter current price"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Original Price */}
        <FormField
          control={control}
          name="price.original_price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Original Price (₹)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="Enter original price"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Discount Percentage */}
        <FormField
          control={control}
          name="price.discount_percentage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discount Percentage</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="e.g., 60"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Discount Deadline */}
        <FormField
          control={control}
          name="price.discount_deadline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discount Deadline</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="date"
                  placeholder="Select deadline"
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
