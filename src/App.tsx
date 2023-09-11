import { Analytics } from '@vercel/analytics/react'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

type EventFromList = {
    id: string;
};

enum AudienceType {
    IN_PERSON = "IN_PERSON",
    VIRTUAL = "VIRTUAL",
    HYBRID = "HYBRID",
}

type Ticket = {
    id: number;
    price: number;
};

type Speaker = {
    id: number;
    first_name: string;
    last_name: string;
    company?: string;
    title?: string;
    bio?: string;
    picture?: {url: string;}; // dimensions unknown for now
    personal_twitter?: string;
}

type Event = {
    id: string;
    title: string;
    description: string;
    description_short: string;
    audience_type: AudienceType;
    picture: {url: string;}; // dimensions 400x400
    start_date: Date;
    end_date: Date;
    tags: string[];
    tickets: Ticket[];
    url: string;
    venue_name: string;
    venue_address: string;
    venue_city: string;
    venue_state: string;
    venue_country: string;
    speakers?: Speaker[];
};

function App() {
const [events, setEvents] = useState<Event[]>([]);
const eventBaseUrl = 'https://gdsc.community.dev/api/event/';

async function getEvents() {
    try {
       const eventsListRes = await axios.get(eventBaseUrl+'?chapter=3432'); 
       const eventsList:EventFromList[] = eventsListRes.data.results;

       const eventDetailsPromises = eventsList.map(async (event: EventFromList) => {
         const eventRes = await axios.get(eventBaseUrl + event.id);
         return eventRes.data as Event;
       });

      const eventDetails = await Promise.all(eventDetailsPromises);
      setEvents(eventDetails);
       
    } catch (error) {
       console.error(error);
    }
}

function stripHtml(html: string) {
  const tmpElement = document.createElement('div');
  tmpElement.innerHTML = html;
  return tmpElement.innerText || '';
}

useEffect(() => {
    getEvents();
    console.log(events);
}, [])

  return (
    <>
    <div>
    {events.map((event) => (
        <div key={event.id}>
            <h1>{event.title}</h1>
            <img src={event.picture.url} alt={event.title} width={300}/>
            <p>{stripHtml(event.description)}</p>
            <p>{event.description_short}</p>
            <p>{event.audience_type}</p>
            <p>{event.start_date.toString()}</p>
            <p>{event.end_date.toString()}</p>
            <p>{event.tags.join(', ')}</p>
            <p>{event.url}</p>
            <p>{event.venue_name}</p>
            <p>{event.venue_address}</p>
            <p>{event.venue_city}</p>
            <p>{event.venue_state}</p>
            <p>{event.venue_country}</p>
        </div>
    )
                )}
    </div>
    <Analytics/>
    </>
  )
}

export default App
