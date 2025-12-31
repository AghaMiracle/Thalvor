import React, {useState} from 'react'
import './contact.css'
import right_arrow from '../../assets/right-arrow.gif'

const contact = () => {


      const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a816cdef-a1dd-4aa7-948c-bb7f2d021e12");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };


  return (
    <div className='contact container'>
        <div className='contact-header'>
            <h2>Contact Me 😁</h2>
        </div>
        <div className='contact-body'>
            <div className='contact-col'>
               <h3>Send me a message 📩</h3>
               <p>Feel free to reach out through the contact form or use any of my contact inform below. Your Feedback, questions and suggestions are important to me as I strive to provide exceptional service to you.</p>
               <ul>
                <li>📧 aghamiracle123@gmail.com</li>
                <li>☎️ (+234)916-079-5546</li>
                <li><a href="https://github.com/AghaMiracle">Github</a></li>
                </ul> 
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required/>
                    <label>Email</label>
                    <input type="mail" name="mail" placeholder='Enter Your Email' required/>
                    <label>Write your message here</label>
                    <textarea name="messsage" id="" rows="6" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn'>Submit Now<img src={right_arrow} alt=''/></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
      
    </div>
  )
}

export default contact
