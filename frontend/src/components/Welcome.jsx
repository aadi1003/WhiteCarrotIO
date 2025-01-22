import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1 className="welcome-heading">Google Calendar Integration App</h1>
        <p className="welcome-description">
          Welcome to the Google Calendar Integration App! This app allows you to:
        </p>
        <ul className="welcome-features">
          <li>Sign in securely with your Google account (SSO).</li>
          <li>Fetch and display your Google Calendar events in a clean table format.</li>
          <li>Search for events by name or description.</li>
          <li>Filter events by date or date range.</li>
          <li>Interact with your calendar by creating, updating, or deleting events.</li>
        </ul>
        <h2 className="instructions-heading">How to Test the App</h2>
        <ol className="testing-instructions">
          <li>Click the <strong>"Login with Google"</strong> button to sign in.</li>
          <li>Authorize the app to access your Google Calendar.</li>
          <li>Once signed in, view your calendar events in a table format.</li>
          <li>
            Use the <strong>Search</strong> box to find events by name or description.
          </li>
          <li>
            Use the <strong>Date Filter</strong> to display events for a specific date or range.
          </li>
          <li>Click on an event to view more details in a popup.</li>
          <li>Log out using the <strong>Logout</strong> button to end your session securely.</li>
        </ol>
        <p className="note">
          Note: Ensure that you have an active Google account with calendar events for testing.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
