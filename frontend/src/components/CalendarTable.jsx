

// import React, { useState } from 'react';

// const CalendarTable = ({ events }) => {
//   const [filterDate, setFilterDate] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 20;

//   // Filter and search logic
//   const filteredEvents = events.filter((event) => {
//     const matchesDate = filterDate === '' || event.start?.dateTime?.startsWith(filterDate);
//     const matchesSearch =
//       (event.summary && event.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
//       (event.description && event.description.toLowerCase().includes(searchQuery.toLowerCase()));
//     return matchesDate && matchesSearch;
//   });

//   // Pagination logic
//   const totalItems = filteredEvents.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

//   // Handlers for pagination
//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="calendar">
//       {/* Filters Section */}
//       <div className="filters">
//         <input
//           type="date"
//           value={filterDate}
//           onChange={(e) => setFilterDate(e.target.value)}
//           className="filter"
//         />
//         <input
//           type="text"
//           placeholder="Search events"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search"
//         />
//       </div>

//       {/* Events Table */}
//       <table>
//         <thead>
//           <tr>
//             <th>Event</th>
//             <th>Start</th>
//             <th>End</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedEvents.map((event, index) => (
//             <tr key={index}>
//               <td>{event.summary || 'No Title'}</td>
//               <td>{event.start?.dateTime ? new Date(event.start.dateTime).toLocaleString() : 'N/A'}</td>
//               <td>{event.end?.dateTime ? new Date(event.end.dateTime).toLocaleString() : 'N/A'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="pagination">
//           <button
//             className="prev"
//             onClick={handlePreviousPage}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>
//           <span className="page-info">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             className="next"
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarTable;



import React, { useState } from 'react';

const CalendarTable = ({ events }) => {
  const [filterDate, setFilterDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null); // For popup modal
  const itemsPerPage = 20;

  // Filter and search logic
  const filteredEvents = events.filter((event) => {
    const matchesDate = filterDate === '' || event.start?.dateTime?.startsWith(filterDate);
    const matchesSearch =
      (event.summary && event.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (event.description && event.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDate && matchesSearch;
  });

  // Pagination logic
  const totalItems = filteredEvents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handler for showing the popup
  const handleEventClick = (event) => {
    setSelectedEvent(event); // Set the selected event for the modal
  };

  // Handler to close the modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="calendar">
      {/* Filters Section */}
      <div className="filters center-inputs">
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="filter"
        />
        <input
          type="text"
          placeholder="Search events"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search"
        />
      </div>

      {/* Events Table */}
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEvents.map((event, index) => (
            <tr key={index} onClick={() => handleEventClick(event)} className="event-row">
              <td>{event.summary || 'No Title'}</td>
              <td>{event.start?.dateTime ? new Date(event.start.dateTime).toLocaleString() : 'N/A'}</td>
              <td>{event.end?.dateTime ? new Date(event.end.dateTime).toLocaleString() : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="prev"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="next"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal for Event Details */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.summary || 'No Title'}</h2>
            <p><strong>Description:</strong> {selectedEvent.description || 'No Description'}</p>
            <p><strong>Start:</strong> {selectedEvent.start?.dateTime ? new Date(selectedEvent.start.dateTime).toLocaleString() : 'N/A'}</p>
            <p><strong>End:</strong> {selectedEvent.end?.dateTime ? new Date(selectedEvent.end.dateTime).toLocaleString() : 'N/A'}</p>
            <p><strong>Location:</strong> {selectedEvent.location || 'No Location'}</p>
            <p><strong>Attendees:</strong> {selectedEvent.attendees ? selectedEvent.attendees.map(a => a.email).join(', ') : 'No Attendees'}</p>
            <button onClick={closeModal} className="close-modal">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarTable;
