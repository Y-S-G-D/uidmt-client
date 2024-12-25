import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {Button}  from '@/components/ui/button'

const CourseImageCard = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  // Handle drag-and-drop
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const droppedFile = event.dataTransfer.files[0];
      setFile(droppedFile);
      setImagePreview(URL.createObjectURL(droppedFile));
    }
  };

  // Handle drag events
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  // Cancel the upload
  const handleCancel = () => {
    setFile(null);
    setImagePreview(null);
  };

  return (
    <Card>
      {/* Cancel Button */}
      
      <CardHeader className="flex justify-between flex-row">
        <CardTitle>Course Image</CardTitle>
        {file && (
        <Button
         variant={'secondary'}
        //   className=" text-sm text-red-600 font-medium"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      )}

      </CardHeader>
{/*       // ${file ? "border-transparent" : "border-dashed border-gray-300"}  */}
      <CardContent
        className={`flex flex-col items-center justify-center 
        rounded-lg  h-[70%] `}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {!file ? (
          <>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-gray-200 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 16v-4a4 4 0 011.17-2.83A4 4 0 018 8h4m4 8l4-4m-4 4V4m0 4l4-4m-4 4H8m4 4v4M8 8h4"
                  />
                </svg>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
              />
              <label htmlFor="file-input" className="font-medium cursor-pointer">
                Choose files or drag and drop
              </label>
              <p className="text-sm text-gray-500">Image (4MB max)</p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full h-48 relative">
              <Image
                src={imagePreview!}
                alt="Preview"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-sm text-gray-600">{file.name}</p>
          </div>
        )}
      </CardContent>

      {/* <CardFooter>
        <p className="text-sm  mt-2 text-gray-400 text-center w-full">
          16:9 aspect ratio recommended
        </p>
      </CardFooter> */}
    </Card>
  );
};

export default CourseImageCard;
