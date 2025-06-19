
import React, { useState } from 'react';
import { FaPlaneDeparture, FaHotel, FaBus, FaTrain, FaCar } from 'react-icons/fa';

const TABS = [
  { label: 'Flights', icon: <FaPlaneDeparture /> },
  { label: 'Hotels', icon: <FaHotel /> },
  { label: 'Buses', icon: <FaBus /> },
  { label: 'Trains', icon: <FaTrain /> },
  { label: 'Cabs', icon: <FaCar /> },
];

const BookingModule = () => {
  const [activeTab, setActiveTab] = useState('Flights');
  const [fareType, setFareType] = useState('Regular');

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-5xl mx-auto mt-10 border border-red-200">
      {/* Tabs */}
      <div className="flex justify-around mb-6 border-b border-gray-200 pb-4">
        {TABS.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center gap-2 px-4 py-2 font-medium ${
              activeTab === tab.label
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-500 hover:text-red-400'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Form */}
      <div className="space-y-4">
        {activeTab === 'Flights' && (
          <>
            <div className="flex gap-4 flex-wrap">
              <input
                type="text"
                placeholder="From (e.g., Delhi)"
                className="input-style"
              />
              <input
                type="text"
                placeholder="To (e.g., Bengaluru)"
                className="input-style"
              />
              <input type="date" className="input-style" />
              <input type="number" min="1" placeholder="Travellers" className="input-style" />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Regular', 'Student', 'Senior Citizen', 'Armed Forces', 'Doctor & Nurses'].map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => setFareType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${
                      fareType === type
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-white text-red-600 border-red-400'
                    }`}
                  >
                    {type}
                  </button>
                )
              )}
            </div>
          </>
        )}

        {activeTab === 'Hotels' && (
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="City / Property Name"
              className="input-style"
            />
            <input type="date" placeholder="Check-in" className="input-style" />
            <input type="date" placeholder="Check-out" className="input-style" />
            <input type="number" min="1" placeholder="Guests" className="input-style" />
          </div>
        )}

        {activeTab === 'Buses' && (
          <div className="flex gap-4 flex-wrap">
            <input type="text" placeholder="From" className="input-style" />
            <input type="text" placeholder="To" className="input-style" />
            <input type="date" className="input-style" />
          </div>
        )}

        {/* Add other tabs similarly */}

        {/* Search Button */}
        <div className="text-center pt-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );

};
export default BookingModule;
