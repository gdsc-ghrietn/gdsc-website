import "./Events.styles.css";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
import { Event, EventFromList} from '../../models/Event';

const Events1: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [expandedEvent, setExpandedEvent] = useState<Event| null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventBaseUrl = 'https://gdsc.community.dev/api/event/';
  async function getEvents() {
    try {
      const eventsListRes = await axios.get(eventBaseUrl + '?chapter=3432');
      const eventsList: EventFromList[] = eventsListRes.data.results;
      const eventDetailsPromises = eventsList.map(async (event: EventFromList) => {
        const eventRes = await axios.get(eventBaseUrl + event.id);
        console.log(eventRes.data)
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

  function formatDate(dateString: string) {
    const formattedDate = new Date(dateString).toUTCString().slice(0, 16);
    return formattedDate;
  }
  function formatTime(dateString: string) {
    const formattedTime = new Date(dateString).toLocaleTimeString("en-US", { timeStyle: "medium" });
    const time = formattedTime.split(":");
    return time[0] + ":" + time[1] + " " + time[2].split(" ")[1];
  }

  useEffect(() => {
    getEvents();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    slidesPerRow: 1,
    speed: 500,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint:1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
          slidesPerRow: 1,
        }, 
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          slidesPerRow: 1,
          rows:1,
          dots:false,
        },
      },
    ],
    };

  return (
    <div id="event-section">
      <h1 className="heading">Events</h1>
      <Slider  {...settings} className="event-caraousel">
          {events.map((event) => (
                        <div key={event.id} className='carousel-item' onClick={() => handleEventClick(event)}>
                        <div className="eventcard">
                        <img
                            className="event-image"
                            src={event.picture.url || "https://res.cloudinary.com/startup-grind/image/fetch/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-dsc/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_fMd5BWp.png"}
                            alt={event.title}
                            width={300}
                        />
                        <div className='event-details' >
                          {<p className="tags">{formatDate(event.start_date.toString())}</p>}
                          <p className="tags">{formatTime(event.start_date.toString())}</p>
                          <h4 className="title">{event.title}</h4>
                        </div>
                        </div>
                    </div>
          ))}
      </Slider>
      {isModalOpen && expandedEvent && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleModalClose}>
              &times;
            </button>
            <div className="expanded-details">
                        <h6 className="title">{expandedEvent.title}</h6>
                        <p>{expandedEvent.description_short}</p>
                        <p className="description" style={{alignContent:"center"}}>{stripHtml(expandedEvent.description)}</p>
                        <br/>
                        {expandedEvent.speakers?.map((id) => (
                            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",alignContent:"center"}}>
                              <p>Speaker : </p>
                              <img className="event-image"
                                src={id.picture?.url || "https://res.cloudinary.com/startup-grind/image/fetch/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-dsc/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_fMd5BWp.png"}
                                alt={id.first_name}  style={{width:"100px",height:"100px",borderRadius:"50%", margin:"auto"
                              }}
                              />
                              <p>Speaker Name: {id.first_name+" "+id.last_name}</p>
                              <p>Speaker Bio:</p>
                              {id.title && <p className="tags">{id.title}</p>}
                              {id.bio && <p className="tags">{stripHtml(id.bio)}</p>}
                            </div>
                          ))}
                        <p>Tags:</p>
                        <p>{expandedEvent.tags.map((tag) => <span className="tags">{tag} </span>)}</p>
                      
                        <div className="event-typetime">
                          <div>
                          <p>Event Type:</p>
                          <p className="tags"> {expandedEvent.audience_type}</p>
                          </div>
                          <div>               
                            <p>Event Timing:</p>
                            <p className="tags">{formatTime(expandedEvent.start_date.toString())}</p> <p>to</p>
                            <p className="tags">{formatTime(expandedEvent.end_date.toString())}</p>
                          </div>
                        </div>
                        <p>Register :</p>
                        <a href={expandedEvent.url} target="_blank" rel="noreferrer"><p className="registerlink">Click Here</p></a> 
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events1;
