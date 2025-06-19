import React, { useState } from 'react';
import { FaUser, FaUsers, FaLock, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

const UserProfile = () => {
  const [form, setForm] = useState({
    firstName: 'Sai',
    lastName: 'Kiran',
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

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="bg-cover bg-center h-40 relative" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506765515384-028b60a970df)` }}>
        <div className="absolute bottom-[-40px] left-10 flex items-center gap-4">
          <img src="https://i.pravatar.cc/80?img=15" className="rounded-full border-4 border-white w-20 h-20" alt="User" />
          <div>
            <h2 className="text-xl font-bold text-white">Sai Kiran</h2>
            <p className="text-white text-sm flex items-center gap-2"><FaMobileAlt /> 9347834548</p>
            <p className="text-blue-100 text-sm flex items-center gap-2 cursor-pointer"><FaEnvelope /> Add Email Address</p>
          </div>
        </div>
      </div>

      <div className="flex mt-20 max-w-6xl mx-auto">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white rounded-lg shadow p-4">
          <h3 className="font-bold mb-4">My Account</h3>
          <nav className="space-y-3">
            <button className="flex items-center gap-2 text-red-600 font-semibold"><FaUser /> My Profile</button>
            <button className="flex items-center gap-2 text-gray-600"><FaUsers /> Co-Travellers</button>
            <button className="flex items-center gap-2 text-gray-600"><FaLock /> Logged in Devices</button>
          </nav>
          <hr className="my-4" />
          <button className="text-sm text-blue-600">Reset Password</button>
        </aside>

        {/* Profile Form */}
        <main className="w-3/4 ml-6 bg-white rounded-lg shadow p-6">
          {/* Profile Completion */}
          <div className="bg-yellow-100 text-yellow-800 text-sm p-3 rounded flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">30%</div>
              <p>Complete your profile to receive updates and critical booking info.</p>
            </div>
            <button className="text-blue-600 text-sm underline">Add Email</button>
          </div>

          {/* Form */}
          <h3 className="font-semibold text-lg mb-4">General Information</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <input className="input" name="firstName" placeholder="First & Middle Name" value={form.firstName} onChange={handleChange} />
            <input className="input" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
            <select className="input" name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input className="input" name="dob" type="date" placeholder="Date of Birth" value={form.dob} onChange={handleChange} />
            <input className="input" name="nationality" placeholder="Nationality" value={form.nationality} onChange={handleChange} />
            <select className="input" name="maritalStatus" value={form.maritalStatus} onChange={handleChange}>
              <option value="">Marital Status</option>
              <option>Single</option>
              <option>Married</option>
            </select>
            <input className="input" name="anniversary" type="date" placeholder="Anniversary" value={form.anniversary} onChange={handleChange} />
            <input className="input" name="city" placeholder="City of Residence" value={form.city} onChange={handleChange} />
            <input className="input" name="state" placeholder="State" value={form.state} onChange={handleChange} />
          </div>

          {/* Save Button */}
          <div className="text-right mt-6">
            <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">Save</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
