import "./Events.styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Event, EventFromList } from "../../models/Event";

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedEvent, setExpandedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventBaseUrl = 'https://gdsc.community.dev/api/event/';

  async function getEvents() {
    try {
      const eventsListRes = await axios.get(eventBaseUrl + '?chapter=3432');
      const eventsList: EventFromList[] = eventsListRes.data.results;

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

  const handleEventClick = (event: Event) => {
    setExpandedEvent(event);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? events.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === events.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  function formatDate(dateString: string) {
    const formattedDate = new Date(dateString).toLocaleDateString(undefined);
    return formattedDate;
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div id="event-section">
      <button
        className="arrow-button left"
        onClick={() => handleArrowClick("left")}
      >
        &lt;
      </button>
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {events.map((event) => (
            <div
              key={event.id}
              className="carousel-item"
              onClick={() => handleEventClick(event)}
            >
              <img className="event-image"
                src={event.picture.url || "https://res.cloudinary.com/startup-grind/image/fetch/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-dsc/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_fMd5BWp.png"}
                alt={event.title}
                width={300}
              />
              <div className="event-details">
                <h6>{event.title}</h6>
                {/* Add date and time as needed */
                <p>{formatDate(event.start_date.toString())}</p>               }
                <p>{stripHtml(event.description_short)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="arrow-button right"
        onClick={() => handleArrowClick("right")}
      >
        &gt;
      </button>
      {isModalOpen && expandedEvent && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleModalClose}>
              &times;
            </button>
            <h1>{expandedEvent.title}</h1>
            <img
              src={expandedEvent.picture.url || "https://res.cloudinary.com/startup-grind/image/fetch/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-dsc/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_fMd5BWp.png"}
              alt={expandedEvent.title}
              width={300}
            />
            <div className="expanded-details">
                         <h1>{expandedEvent.title}</h1>
                        <img src={expandedEvent.picture.url} width={300}/>
                        <p>{stripHtml(expandedEvent.description)}</p>
                        <p>{expandedEvent.description_short}</p>
                        <p>{expandedEvent.audience_type}</p>
                        <p>{expandedEvent.start_date.toString()}</p>
                        <p>{expandedEvent.end_date.toString()}</p>
                        <p>{expandedEvent.tags.join(', ')}</p>
                        <p>{expandedEvent.url}</p>
                        <p>{expandedEvent.venue_name}</p>
                        <p>{expandedEvent.venue_address}</p>
                        <p>{expandedEvent.venue_city}</p>
                        <p>{expandedEvent.venue_state}</p>
                        <p>{expandedEvent.venue_country}</p>
              {/* Add more details as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
