import React from 'react';
import { Link } from 'react-router-dom';

const PasswordResetLink = () => {
  return (
    <div className="mt-6 text-right">
      <Link to="/reset-password" className="text-sm text-blue-600 hover:underline">
        Reset Password
      </Link>
    </div>
  );
};

export default PasswordResetLink;