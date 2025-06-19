import React from 'react';
import ProfilePictureUploader from './profilepictureuploader';
import EmailUpdater from './EmailUpdater';
import ProfileForm from './profileform';
import PasswordResetLink from './PasswordResetLink';
const ProfilePage = () => {
return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
         <div style={{ height: 100 }} ></div>
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
       
        <ProfilePictureUploader />
        <EmailUpdater />
        <ProfileForm />
        <PasswordResetLink />
    </div>
);
};

export default ProfilePage;