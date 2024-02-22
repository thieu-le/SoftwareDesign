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
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Address 1"
        value={address1}
        onChange={(e) => setAddress1(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Address 2"
        value={address2}
        onChange={(e) => setAddress2(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <select value={state} onChange={(e) => setState(e.target.value)} required>
        <option value="">Select State</option>
        {/* Populate states dynamically or hardcode them */}
      </select>
      <input
        type="text"
        placeholder="Zipcode"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        minLength={5}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileForm;
