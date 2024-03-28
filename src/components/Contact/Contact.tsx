import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef(null);
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    form.current &&
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully", { autoClose: 2000 });
          if (form.current) {
            (form.current as HTMLFormElement).reset();
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("Message not sent", { autoClose: 2000 });
        }
      );
  };
  return (
    <div className="w-full h-full flex justify-between pt-16 flex-col items-center">
      <ToastContainer />
      <div className="text-6xl font-bold text-white font-game1 mb-5 ">
        Contact Us
      </div>
      <div className="w-full h-screen flex justify-between sm:pt-12 flex-col items-center">
        <div className="flex-col-reverse  flex sm:flex-row justify-around items-center h-full w-full px-6  mb-3 max-w-[1920px]">
          <div className="flex  justify-center items-center sm:w-[50%] w-[100%] h-[30%] sm:h-[50%] ">
            <div className="flex justify-center items-center bg-black  h-full border-none sm:rounded-3xl w-[100%] sm:w-[80%] p-0 text-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.466243279665!2d79.00171792141964!3d21.12491990991707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eab12bd10cef%3A0xf6e67c2f0a066c27!2sG.%20H.%20Raisoni%20Institute%20of%20Engineering%20and%20Technology%20(Autonomous)!5e0!3m2!1sen!2sin!4v1705843369091!5m2!1sen!2sin"
                loading="lazy"
                className="w-full h-full  m-0  border-0 rounded-xl"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col  sm:m-0 sm:justify-start items-center sm:w-[60%] w-full">
            <form
              className="flex flex-col justify-center items-center bg-violet-600 opacity-2 w-full h-full  rounded-xl px-4 sm:py-4 py-2"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="sm:text-4xl text-2xl font-bold text-white font-game1 mb-3 text-center">
                Feel free to ask us for any queries
              </div>
              <div className="sm:flex-col flex justify-between items-center w-full">
                <label className="sm:text-3xl text-xl font-bold text-white font-game1 mb-2 mt-2 sm:mr-0 mr-3">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="sm:w-[80%] w-[70%] px-4 rounded-xl border-[3px] border-blue-400  focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-indigo-500/50 sm:text-3xl text-2xl font-game1"
                  required
                  minLength={3}
                />
              </div>
              <div className="sm:flex-col flex justify-between items-center w-full ">
                <label className="sm:text-3xl text-xl font-bold text-white font-game1 mb-2 mt-2 sm:mr-0 mr-3 ">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="sm:w-[80%] w-[70%] px-4 rounded-xl border-[3px] border-blue-400  focus:ring-green-500 focus:ring-2 text-lg font-game1 "
                />
              </div>
              <div className="sm:flex-col flex justify-between items-center w-full ">
                <label className="sm:text-3xl text-xl font-bold text-white font-game1 mb-2 mt-2 sm:mr-0 mr-3 ">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="sm:w-[80%] w-[70%] px-4  rounded-xl border-[3px] border-blue-400  focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-indigo-500/50 text-lg font-game1"
                  required
                  minLength={3}
                />
              </div>
              <div className="sm:flex-col flex justify-between items-center w-full ">
                <label className="sm:text-3xl text-xl font-bold text-white font-game1 mb-2 mt-2 sm:mr-0 mr-3 ">
                  Message
                </label>
                <input
                  type="text"
                  name="message"
                  className="sm:w-[80%] w-[70%] py-2 px-4  rounded-xl border-[3px] border-blue-400 focus:ring-2 focus:ring-green-500  focus:shadow-lg focus:shadow-indigo-500/50 text-lg font-game1"
                  required
                  minLength={3}
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="w-[60%] sm:w-[50%] h-8 sm:h-12 sm:text-lg text-sm sm:p-0.5  rounded-3xl border-2 border-black bg-white text-black font-bold sm:mt-6 mt-4 font-game2 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
