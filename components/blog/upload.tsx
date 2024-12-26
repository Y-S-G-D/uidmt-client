import React, { useState } from 'react';

interface UploadProps {
  accept: string;
  onChange: (file: File) => void;
}

const Upload: React.FC<UploadProps> = ({ accept, onChange }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreview(fileUrl); // Show the image preview
      onChange(file); // Pass the file to the parent component
    }
  };

  return (
    <div className=" p-4  rounded-lg flex flex-col items-center">
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className='hidden'
        id='blog-thumbnail'
        // className=" py-2 px-4 mb-4 border-2 border-gray-300 rounded-md cursor-pointer"
      />
      <label htmlFor="blog-thumbnail">
        <div className="cursor-pointer py-2 px-4 rounded-lg border ">
          Choose file
        </div>
      </label>
      {preview && (
        <div className="image-preview mt-4">
          <img
            src={preview}
            alt="Thumbnail Preview"
            className="w-32 h-32 object-cover rounded-md shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
