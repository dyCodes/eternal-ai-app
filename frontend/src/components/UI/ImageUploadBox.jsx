import { useState } from 'react';
import { toast } from 'react-toastify';

const allowedMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
];

const ImageUploadBox = ({ imageFile, imagesPreview, onChange }) => {
  // Handle image change
  const handleChange = (event) => {
    let files = event.target.files;
    if (!files.length) return;

    // Set limit to 3 images
    if (files.length > 3) {
      toast.error('You can only upload a maximum of 3 images.');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Validate file type
      if (!allowedMimeTypes.includes(file.type)) {
        toast.error(
          `Invalid file type for ${file.name}. Only JPEG, PNG, WEBP, and HEIC are allowed.`
        );
        return (files = null);
      }
      // Validate file size
      if (file.size > 3 * 1024 * 1024) {
        toast.error(`File size for ${file.name} should not exceed 3MB.`);
        return (files = null);
      }
    }

    if (files) {
      onChange(event);
    }
  };

  return (
    <div className='flex items-center justify-center w-full'>
      <label
        htmlFor='dropzone-file'
        className='flex flex-col items-center justify-center w-full min-h-60 max-h-80 border border-secondary-940 border-dashed rounded-lg cursor-pointer bg-white'
      >
        {imageFile ? (
          <div className='w-full px-2 flex justify-center overflow-hidden'>
            {imagesPreview.map((image, index) => (
              <div className='' key={index}>
                <img
                  src={image}
                  className={'h-full max-h-80 object-cover px-1'}
                  alt='upload image'
                />
              </div>
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center pt-4 pb-5'>
            <svg
              className='w-8 h-8 mb-4 text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 16'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
              />
            </svg>
            <p className='mb-2 text-sm text-gray-500'>
              <span className='font-semibold'>Click to upload</span> or drag and
              drop
            </p>
            <p className='text-xs text-gray-500'>
              PNG, JPG, WEBP or HEIC (MAX: 3MB)
            </p>
          </div>
        )}

        <input
          id='dropzone-file'
          type='file'
          className='hidden'
          multiple={true}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default ImageUploadBox;
