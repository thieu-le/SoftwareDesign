import React, { useState } from 'react';

const ProfileForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile submission logic, e.g., sending data to the server
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile Management</h2>
      <div>
        <label htmlFor="fullName">Full Name (Max 50 characters):</label>
        <input
          type="text"
          id="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          maxLength={50}
          required
        />
      </div>
      <div>
        <label htmlFor="address1">Address 1 (Max 100 characters):</label>
        <input
          type="text"
          id="address1"
          placeholder="Address 1"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          maxLength={100}
          required
        />
      </div>
      <div>
        <label htmlFor="address2">Address 2 (Max 100 characters):</label>
        <input
          type="text"
          id="address2"
          placeholder="Address 2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          maxLength={100}
        />
      </div>
      <div>
        <label htmlFor="city">City (Max 100 characters):</label>
        <input
          type="text"
          id="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          maxLength={100}
          required
        />
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <select id="state" value={state} onChange={(e) => setState(e.target.value)} required>
          <option value="">Select State</option>
          {/* Populate states dynamically or hardcode them */}
        </select>
      </div>
      <div>
        <label htmlFor="zipcode">Zipcode (Min 5 characters):</label>
        <input
          type="text"
          id="zipcode"
          placeholder="Zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          minLength={5}
          maxLength={9}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileForm;
