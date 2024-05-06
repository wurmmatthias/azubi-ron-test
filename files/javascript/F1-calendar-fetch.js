// Include the ical.js library
// You can download it from https://github.com/mozilla-comm/ical.js
// Or include it via CDN


// Define the URL of the .ics file
const icsUrl = 'https://calendar.google.com/calendar/ical/ekqk1nbdusr1baon1ic42oeeik%40group.calendar.google.com/public/basic.ics';

// Function to fetch the .ics file
async function fetchIcsFile(url) {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

// Function to parse the .ics file and extract last and next events
async function parseIcsFile(url) {
  const icalData = await fetchIcsFile(url);
  const jcalData = ICAL.parse(icalData);
  const comp = new ICAL.Component(jcalData);
  const vevents = comp.getAllProperties('vevent');
  const now = new Date();

  let lastEvent = null;
  let nextEvent = null;

  for (const vevent of vevents) {
    const event = new ICAL.Event(vevent);
    const startDate = event.startDate.toJSDate();

    if (startDate < now && (!lastEvent || startDate > lastEvent.startDate)) {
      lastEvent = event;
    }

    if (startDate > now && (!nextEvent || startDate < nextEvent.startDate)) {
      nextEvent = event;
    }
  }

  return { lastEvent, nextEvent };
}

// Usage example
parseIcsFile(icsUrl).then(({ lastEvent, nextEvent }) => {
  document.getElementById("lastRace").innerHTML = lastEvent;
  document.getElementById("nextRace").innerHTML = nextEvent;
});


/*.catch(error => {
  console.error("Error fetching or parsing .ics file:", error);
  document.getElementById("lastRace").innerHTML = "Fehler beim Abruf";
  document.getElementById("nextRace").innerHTML = "Fehler beim Abruf";
});*/