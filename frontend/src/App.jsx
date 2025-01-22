// import React, { useState, useEffect } from 'react';
// import LoginButton from './components/LoginButton';
// import CalendarTable from './components/CalendarTable';

// const App = () => {
//   const [events, setEvents] = useState([]);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const fetchEvents = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/auth/events', { credentials: 'include' });
//       if (res.ok) {
//         const data = await res.json();
//         setEvents(data);
//         setLoggedIn(true);
//       }
//     } catch {
//       setLoggedIn(false);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const handleLogout = async () => {
//     await fetch('http://localhost:5000/auth/logout', {
//       method: 'POST',
//       credentials: 'include',
//     });
//     setLoggedIn(false);
//     setEvents([]);
//   };

//   return (
//     <div className="app">
//       {loggedIn ? (
//         <>
//           <button onClick={handleLogout} className="logout">Logout</button>
//           <CalendarTable events={events} />
//         </>
//       ) : (
//         <LoginButton />
//       )}
//     </div>
//   );
// };

// export default App;












// import React, { useState, useEffect } from 'react';
// import LoginButton from './components/LoginButton';
// import CalendarTable from './components/CalendarTable';
// import { ClipLoader } from 'react-spinners';
// import Welcome from './components/Welcome';

// const App = () => {
//   const [events, setEvents] = useState([]);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const fetchEvents = async () => {
//     setLoading(true); // Show spinner
//     try {
//       const res = await fetch('http://localhost:5000/auth/events', { credentials: 'include' });
//       if (res.ok) {
//         const data = await res.json();
//         setEvents(data);
//         setLoggedIn(true);
//       }
//     } catch {
//       setLoggedIn(false);
//     }
//     setLoading(false); // Hide spinner
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const handleLogout = async () => {
//     setLoading(true);
//     await fetch('http://localhost:5000/auth/logout', {
//       method: 'POST',
//       credentials: 'include',
//     });
//     setLoading(false);
//     setLoggedIn(false);
//     setEvents([]);
//   };

//   return (
//     <div className="app">
//       {loading ? (
//         <div className="spinner">
//           <ClipLoader color="#4285f4" loading={loading} size={50} />
//         </div>
//       ) : loggedIn ? (
//         <>
//           <button onClick={handleLogout} className="logout">Logout</button>
//           <CalendarTable events={events} />
//         </>
//       ) : (
//         <>
//         <LoginButton />
//         <Welcome/>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;




import React, { useState, useEffect } from 'react';
import LoginButton from './components/LoginButton';
import CalendarTable from './components/CalendarTable';
import { ClipLoader } from 'react-spinners';
import Welcome from './components/Welcome';

const App = () => {
  const [events, setEvents] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true); // Show spinner
    try {
      const res = await fetch('http://localhost:5000/auth/events', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setEvents(data);
        setLoggedIn(true);
      }
    } catch {
      setLoggedIn(false);
    }
    setLoading(false); // Hide spinner
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    await fetch('http://localhost:5000/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    setLoading(false);
    setLoggedIn(false);
    setEvents([]);
  };

  return (
    <div className="app">
      {loading ? (
        <div className="spinner">
          <ClipLoader color="#4285f4" loading={loading} size={50} />
        </div>
      ) : loggedIn ? (
        <>
          <button onClick={handleLogout} className="logout">Logout</button>
          <CalendarTable events={events} />
        </>
      ) : (
        <>
          <LoginButton setLoggedIn={setLoggedIn} />
          <Welcome />
        </>
      )}
    </div>
  );
};

export default App;
