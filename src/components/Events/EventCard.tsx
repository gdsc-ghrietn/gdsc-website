import { Event } from "../../models/Event";

const EventCard = ({
  event,
  handleReadMoreClick,
  formatDate,
  formatTime,
}: {
  event: Event;
  handleReadMoreClick: Function;
  formatDate: Function;
  formatTime: Function;
}) => {
  const defImageUrl =
    "https://res.cloudinary.com/startup-grind/image/fetch/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_fMd5BWp.png";

  const formattedDate = formatDate(event.start_date);
  const formattedTime = formatTime(event.start_date);

  return (
    <div className='bg-white rounded-lg   w-full justify-between  overflow-hidden flex lg:flex-row md:flex-row flex-col font-game1 max-h-[60vh] min-h-[60vh] lg:min-h-[35vh] lg:max-h-[35vh] md:min-h-[35vh] md:max-h-[35vh] shadow-[4px__3px_0px] shadow-violet-600 '>
      <img
        src={event.picture?.url || defImageUrl}
        className='object-fill lg:w-1/2 md:w-1/2  lg:h-[35vh]    w-full  lg:rounded-none'
        alt='Event Image'
      />
      <div className='p-1  lg:p-4  lg:w-full md:w-full    flex flex-col justify-between'>
        <div className='flex mb-4 lg:m-0 flex-col lg:justify-around lg:w-full lg:h-full'>
          <h1
            className='lg:text-3xl text-xl font-game1 m-4 lg:m-2'
            style={{ lineHeight: "0.8em" }}
          >
            {event.title}
          </h1>
          <div>
            <div className='flex justify-evenly text-lg lg:text-2xl'>
              <p>{formattedDate}</p>
              {";"}
              <p>{formattedTime}</p>
            </div>
          </div>
        </div>
        <div className='flex justify-end '>
          <button
            className='bg-violet-600 text-white lg:p-1 lg:px-3 md:p-2 sm:p-2 p-2  rounded-md lg:text-xl sm:text-md md:text-xl transition-all duration-1500 hover:bg-white hover:text-violet-600 hover:border hover:border-violet-600 '
            onClick={() => handleReadMoreClick(event)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
