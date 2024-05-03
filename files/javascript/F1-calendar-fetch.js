// Fetch the next and last events from Google Calendar API
function fetchCalendarEvents() {
    // Make a GET request to the Google Calendar API
    fetch('https://www.googleapis.com/calendar/v3/calendars/ekqk1nbdusr1baon1ic42oeeik%40group.calendar.google.com/events')
    .then(response => response.json())
    .then(data => {
    // Parse the response data to extract next and last events
    const events = data.items;
    const nextEvent = events[0];
    const lastEvent = events[events.length - 1];
    
    // Do something with the next and last events
    console.log('Next Event:', nextEvent);
    console.log('Last Event:', lastEvent);
    })
    .catch(error => {
    console.error('Error fetching calendar events:', error);
    });
    }
    
    // Call the function to fetch calendar events
    fetchCalendarEvents();