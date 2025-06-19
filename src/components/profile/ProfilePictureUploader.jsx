import React, { useState } from 'react';

const ProfilePictureUploader = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <img
        src={preview || 'https://via.placeholder.com/100'}
        alt="Profile"
        className="w-20 h-20 rounded-full object-cover border"
      />
      <label className="cursor-pointer bg-gray-200 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300">
        Upload Photo
        <input type="file" onChange={handleImageChange} accept="image/*" hidden />
      </label>
    </div>
  );
};

export default ProfilePictureUploader;