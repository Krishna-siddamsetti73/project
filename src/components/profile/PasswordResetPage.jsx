import React, { useState } from 'react';

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    console.log('Send password reset link to:', email);
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>
      <p className="text-sm text-gray-600 mb-4">Enter your registered email to receive a reset link.</p>
      <input
        type="email"
        placeholder="Email address"
        className="input mb-4 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleReset} className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 w-full">
        Send Reset Link
      </button>
    </div>
  );
};

export default PasswordResetPage;