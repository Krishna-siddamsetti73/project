import React, { useState } from 'react';

const ProfileForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    nationality: '',
    maritalStatus: '',
    anniversary: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile saved:', form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="input" />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="input" />
        <select name="gender" value={form.gender} onChange={handleChange} className="input">
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input type="date" name="dob" value={form.dob} onChange={handleChange} className="input" />
        <input name="nationality" placeholder="Nationality" value={form.nationality} onChange={handleChange} className="input" />
        <select name="maritalStatus" value={form.maritalStatus} onChange={handleChange} className="input">
          <option value="">Marital Status</option>
          <option>Single</option>
          <option>Married</option>
        </select>
        <input type="date" name="anniversary" value={form.anniversary} onChange={handleChange} className="input" />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="input" />
        <input name="state" placeholder="State" value={form.state} onChange={handleChange} className="input" />
      </div>
      <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">Save</button>
    </form>
  );
};

export default ProfileForm;