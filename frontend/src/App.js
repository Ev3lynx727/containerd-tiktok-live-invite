import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwt, setJwt] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [usernames, setUsernames] = useState('');
  const [invites, setInvites] = useState([]);
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // TODO: Redirect to TikTok OAuth
    // For now, mock login
    setJwt('mock_jwt');
    setIsLoggedIn(true);
  };

  const handleInvite = async () => {
    try {
      const response = await axios.post('http://backend:3060/api/trigger-invite', {
        liveUrl,
        usernames: usernames.split(',').map(u => u.trim())
      }, {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      setMessage('Invite posted successfully!');
    } catch (error) {
      setMessage('Error: ' + error.response?.data?.error || error.message);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get('http://backend:3060/api/invites', {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      setInvites(response.data.invites);
    } catch (error) {
      setMessage('Error fetching history');
    }
  };

  return (
    <div className="App">
      <h1>TikTok Live Invite</h1>
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login with TikTok</button>
      ) : (
        <div>
          <h2>Create Invite</h2>
          <input
            type="text"
            placeholder="Live URL (e.g., tiktok.com/@username/live)"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Usernames (comma-separated)"
            value={usernames}
            onChange={(e) => setUsernames(e.target.value)}
          />
          <button onClick={handleInvite}>Send Invite</button>

          <h2>History</h2>
          <button onClick={fetchHistory}>Load History</button>
          <ul>
            {invites.map((invite, index) => (
              <li key={index}>
                {invite.liveUrl} - {invite.status} ({invite.createdAt})
              </li>
            ))}
          </ul>

          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
}

export default App;