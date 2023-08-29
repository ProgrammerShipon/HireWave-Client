import React from 'react';
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { ReactCrop } from 'react-image-crop';

const ImageCrop = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [crop, setCrop] = useState({ aspect: 1, unit: 'px', width: 180, height: 180 });
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 1024 * 1024) {
          alert('File size exceeds 1MB limit.');
          return;
        }
  
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleCropChange = (newCrop) => {
      setCrop(newCrop);
    };

    return (
        <div className="w-40 h-40 border border-green/60 flex items-center justify-center rounded-lg bg-purple/5 hover:shadow-lg hover:shadow-green/20 duration-300">
            <div className="relative">
                {selectedImage ? (
                <ReactCrop
                    src={selectedImage}
                    crop={crop}
                    onChange={handleCropChange}
                    minWidth={180}
                    minHeight={180}
                    keepSelection={true}
                    className="w-48 h-48"
                />
                ) : (
                <label htmlFor="image-input" className="flex flex-col items-center cursor-pointer">
                    <div>
                        <FaUserAlt size={80} className="text-5xl text-dark/10 mb-2 mx-auto" />
                        <p className='text-sm'>Upload Image</p>
                    </div>
                    <input
                    type="file"
                    id="image-input"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleImageChange}
                    className="hidden"
                    />
                </label>
                )}
            </div>
        </div>
    );
};

export default ImageCrop;