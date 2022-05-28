import React from 'react';
// Here we are importing a CSS file as a dependency

function Contact() {
    return (
        <div className='card'>
            <div className='card-header'>Contact Me</div>
            <div className='card-content'>
                <ul class="contact-links-list">
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