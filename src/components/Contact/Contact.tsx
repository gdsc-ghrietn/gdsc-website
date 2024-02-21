import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef(null);
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const sendEmail = (e:any) => {
      e.preventDefault(); 
      console.log(form.current);
     form.current && emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
              toast.success('Message sent successfully',{autoClose: 2000});
          if (form.current) {
              (form.current as HTMLFormElement).reset();
          }
        }, (error) => {
            console.log(error.text);
              toast.error('Message not sent',{autoClose: 2000});
          });
    };
  return (
    <div className="w-full h-full sm:h-screen flex  justify-top pt-24 flex-col items-center">
      <ToastContainer />
      <div className="text-6xl font-bold text-white font-game1 mb-5 ">
        Contact Us
      </div>
      <div className="flex-col-reverse  flex sm:flex-row justify-center gap-2  items-center h-[75%] w-full px-6  mb-3">
        <div className="flex  justify-center items-center sm:w-[80%] w-[100%] h-full ">
          <div className="flex justify-center items-center bg-black  h-full border-none sm:rounded-3xl w-[100%] sm:w-[80%] p-0 text-white">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.466243279665!2d79.00171792141964!3d21.12491990991707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eab12bd10cef%3A0xf6e67c2f0a066c27!2sG.%20H.%20Raisoni%20Institute%20of%20Engineering%20and%20Technology%20(Autonomous)!5e0!3m2!1sen!2sin!4v1705843369091!5m2!1sen!2sin"
              loading="lazy" className="w-full h-full  m-0  border-0 rounded-xl"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col  sm:m-0 sm:justify-start items-center sm:w-[60%] w-full h-full ">
          <form className="flex flex-col justify-center items-center bg-violet-600 opacity-2 w-full h-full  rounded-xl px-4 py-4" ref={form} onSubmit={sendEmail}>
            <div className="text-4xl font-bold text-white font-game1 mb-3 text-center">
              Feel free to ask us for any queries
            </div>
            <label className="text-3xl font-bold text-white font-game1 mb-2 mt-2">
              Name
            </label>
            <input
              type="text" name="user_name"
              className="w-[80%] px-4 rounded-xl border-[3px] border-blue-400 focus:bg-indigo-500 focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-indigo-500/50 text-lg font-game1"
            />
            <label className="text-3xl font-bold text-white font-game1 mb-2 mt-2">
              Email
            </label>
            <input
              type="email" name="user_email"
              className="w-[80%] px-4 rounded-xl border-[3px] border-blue-400 focus:bg-indigo-500 focus:ring-green-500 focus:ring-2 text-lg font-game1 "
            />
            <label className="text-3xl font-bold text-white font-game1 mb-2 mt-2">
              Subject
            </label>
            <input
              type="text" name="subject"
              className="w-[80%] px-4  rounded-xl border-[3px] border-blue-400 focus:bg-indigo-500 focus:ring-2 focus:ring-green-500 focus:shadow-lg focus:shadow-indigo-500/50 text-lg font-game1"
            />
            <label className="text-3xl font-bold text-white font-game1 mb-2 mt-2">
              Message
            </label>
            <input
              type="text" name="message"
             className="w-[80%] py-2 px-4  rounded-xl border-[3px] border-blue-400 focus:ring-2 focus:ring-green-500 focus:bg-indigo-500 focus:shadow-lg focus:shadow-indigo-500/50 text-lg font-game1" />
            <button
              type="submit" value="Send"
              className="w-[80%] sm:w-[50%] h-10 text-lg p-0.5  rounded-3xl border-2 border-black bg-white text-black font-bold mt-6 font-game2 hover:scale-105 transition-all duration-300 "
            > 
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-black w-full h-full"></div>
    </div>
  );
};

export default Contact;
