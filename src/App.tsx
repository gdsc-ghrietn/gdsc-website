import { Analytics } from '@vercel/analytics/react'
import './App.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

function App() {
const form = useRef(null);
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e:any) => {
    e.preventDefault();

   form.current && emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <input type='text' name='subject' />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
     <Analytics/>
    </>
  );
}

export default App
