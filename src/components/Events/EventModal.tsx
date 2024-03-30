import { FaCalendarAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { Speaker } from "../../models/Event";
function EventModal(props: any) {
  const { expandedEvent, formatDate, formatTime } = props;

  const tags = expandedEvent.tags;
  function stripHtml(html: string) {
    const tmpElement = document.createElement("div");
    tmpElement.innerHTML = html;
    return tmpElement.innerText || "";
  }

  return (
    <>
      {expandedEvent && (
        <dialog id='my_modal_3' className='modal modal-bottom  lg:modal-middle'>
          <form
            method='dialog'
            className='modal-backdrop w-screen absolute h-screen z-0'
          >
            <button>dwadad</button>
          </form>
          <div
            className=' flex flex-col    text-slate-900   bg-white backdrop-blur-xl  lg:w-[50%] overflow-scroll overflow-x-hidden lg:rounded-xl rounded-t-xl'
            style={{
              scrollbarWidth: "none",
            }}
          >
            <div className='w-full text-center text-white flex justify-between bg-violet-600 lg:p-2 p-3 rounded-t-xl'>
              <div className='w-full'>
                <span className='text-xl text-center lg:text-3xl'>
                  {expandedEvent.title}
                </span>
              </div>
              <form method='dialog' className='justify-end'>
                <button
                  id='close-btn'
                  className='btn btn-sm btn-circle btn-ghost  text-white '
                >
                  ✕
                </button>
              </form>
            </div>
            <div className='w-full text-justify p-2 px-4'>
              <p className='text-lg lg:text-xl leading-5'>
                {expandedEvent.description_short}
              </p>
            </div>
            <div
              className='w-full h-min flex lg:flex-row flex-col justify-center items-center px-4'
              style={{
                flexDirection:
                  expandedEvent.speakers?.length > 1 ? "column" : "row",
              }}
            >
              <div
                className={`w-full ${
                  expandedEvent.speakers?.length ? "lg:w-[100%]" : "w-full"
                } lg:flex text-justify items-center hidden`}
              >
                <span
                  className='text-sm lg:text-lg'
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    lineHeight: "1.4em",
                  }}
                >
                  {stripHtml(expandedEvent.description)}
                </span>
              </div>

              {expandedEvent.speakers.length > 0 && (
                <div className='lg:w-[80%]  lg:max-w-80  max-w-60  flex lg:flex-row  flex-row align-middle items-center   p-6 justify-center'>
                  {expandedEvent.speakers?.map((speaker: Speaker) => (
                    <div
                      key={speaker.id}
                      className='aspect-square flex flex-col  justify-center  items-center'
                    >
                      <img
                        src={speaker.picture?.url}
                        alt={speaker.first_name + " " + speaker.last_name}
                        className='w-[60%] lg:w-[70%] aspect-square rounded-full  drop-shadow-2xl  '
                        style={{
                          background:
                            " linear-gradient(145deg, #e6e6e6, #ffffff)",
                          boxShadow:
                            "6px 6px 12px #ababab, -6px -6px 12px #ffffff",
                        }}
                      />
                      <span className='mt-3'> Speaker </span>
                      <span className=' text-xl text-center w-44'>
                        {speaker.first_name} {speaker.last_name}
                      </span>

                      <span
                        className='text-sm  text-center  overflow-hidden '
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: "2",
                          WebkitBoxOrient: "vertical",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                        }}
                      >
                        {stripHtml(speaker.bio || "")}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='my-2 flex flex-row justify-center gap-5'>
              {tags.map((tag: string , index:number) => (
                <div
                  key={index}
                  className='bg-violet-600 text-sm lg:text-lg text-white p-2 lg:py-0  rounded-md'
                >
                  <span>{tag}</span>
                </div>
              ))}
            </div>
            <div className='w-full flex flex-row justify-evenly items-center px-6 m-0 lg:m-3   text-base sm:text-xl'>
              <div className='flex gap-1 items-center'>
                <div>
                  <FaCalendarAlt color='#7c3aed' />
                </div>
                <div className='text-sm'>
                  {formatDate(expandedEvent.start_date)}
                </div>
              </div>
              <div className='flex gap-1 items-center'>
                <div>
                  <IoIosTime color='#7c3aed' />
                </div>
                <div className='text-sm '>
                  {formatTime(expandedEvent.start_date)}
                </div>
              </div>
            </div>
            <div className='w-full flex justify-end px-6 m-2'>
              <a
                href={expandedEvent.url}
                className='border bg-violet-600 text-white shadow-2xl shadow-black px-4 py-2 rounded-xl cursor-pointer '
              >
                Register Here
              </a>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default EventModal;
