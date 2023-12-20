import './ContactUs.styles.css';
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs: React.FC =()=>{
    const form = useRef(null);
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const sendEmail = (e:any) => {
        e.preventDefault(); 
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

    return(
        <div id="contact-us-section">
            <ToastContainer />
            <div className='contact-us-container'>
                <div className="contact-us-header">
                        <h1>Contact Us</h1>
                        <p>Feel free to contact us for any queries</p>
                    </div>
                    <div className='divider'></div>
                    <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder='Your full name' />
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder='name@gmail.com' />
                    <label>Subject</label>
                    <input type='text' name='subject' placeholder='Query'/>
                    <label>Message</label>
                    <textarea name="message" placeholder='Tell your message' />
                    <input type="submit" value="Send" />
                    </form>
                </div>
        </div>
    );
}

export default ContactUs;
