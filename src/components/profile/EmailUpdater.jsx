import React, { useState } from 'react';

const EmailUpdater = () => {
  const [email, setEmail] = useState('');

  const handleUpdate = () => {
    console.log('Email updated:', email);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2">Email Address</label>
      <div className="flex gap-2">
        <input
          type="email"
          className="input flex-grow"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Email</button>
      </div>
    </div>
  );
};

export default EmailUpdater;