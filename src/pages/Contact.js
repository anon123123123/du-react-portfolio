//import React from 'react';
import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      return name === 'name' ? setName(value) : setemail(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
        alert('Message sent to /dev/null')
          return (true)
        } else {
          alert("You have entered an invalid email address!")
          return (false)
      }
       
      };

    return (
        <div className='card'>
            <div className='card-header'>Contact Me</div>
            <div className='card-content'>
            <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <textarea
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
                <ul className="contact-links-list">
                    <li><a href="mailto:fake@example.com">Email</a></li>
                    <li><a href="https://www.linkedin.com/in/williamhgates?original_referer=">LinkedIn</a></li>
                    <li><a href="https://github.com/anon123123123">Github</a></li>
                    <li><a href="http://example.com">example.com</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;