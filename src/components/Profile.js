// src/components/Profile.js
import React from 'react';

function Profile({ user }) {
  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <p><strong>Username:</strong> {user.username}</p>
        {/* Display more user information here */}
      </div>
    </div>
  );
}

export default Profile;
