import React from 'react';

function Portfolio() {
  return (
    <div className='card'>
    <div className='card-header'>Portfolio</div>
    <div className='card-content'>
    <div className="img-container">
                    <a href="https://github.com/anon123123123/du-e-commerce-proj-11">
                        <figure className="popout-text">
                            <img className="main-img" src="/images/NY-650x488.jpeg" alt="NYC from Hotel Standard" />
                            <figcaption>E-commerce API<br/>Node </figcaption>
                        </figure>
                    </a>
                    <a href='https://www.youtube.com/watch?v=HsThmm0RD_0'>Video Demo</a>
                    <a href="https://github.com/anon123123123/du-planner-proj-5">
                        <figure className="popout-text">
                            <img className="secondary-img" src="/images/sant-285x214.jpeg" alt="Santorini Sunset" />
                            <figcaption>Daily planner<br/>HTML/ JQuery</figcaption>
                        </figure>
                    </a>
                    <a href='https://anon123123123.github.io/du-planner-proj-5/'>Deployed</a>
                    <a href="https://github.com/anon123123123/du-weather-proj-6">
                        <figure className="popout-text">
                            <img className="secondary-img" src="/images/ibiza-285.jpeg" alt="Ibiza Spain" />
                            <figcaption>Weather forecast<br/>JavaScript</figcaption>
                        </figure>
                    </a>
                    <a href='https://anon123123123.github.io/du-weather-proj-6/'>Deployed</a>
                    <a href="https://github.com/anon123123123/du-text-editor-pwa">
                        <figure className="popout-text">
                            <img className="secondary-img" src="/images/prague-285.jpeg"
                                alt="Prague Czech Republic" />
                            <figcaption>Text editor<br/>Node Progressive Web App</figcaption>
                        </figure>
                    </a>
                    <a href='https://whispering-beach-79862.herokuapp.com/'>Deployed</a>
                    <a href="https://github.com/anon123123123/du-note-taker-proj-9">
                        <figure className="popout-text">
                            <img className="secondary-img" src="/images/denver285.JPG" alt="Denver CO" />
                            <figcaption>Note Taker<br/>Node - CLI Tool</figcaption>
                        </figure>
                    </a>
                    <a href='https://warm-brook-07938.herokuapp.com/'>Deployed</a>
                    <a href="https://github.com/anon123123123/du-employee-tracker-proj-10">
                        <figure className="popout-text">
                            <img className="secondary-img" src="/images/denver285.JPG" alt="Denver CO" />
                            <figcaption>Employee Tracker<br/>Node - CLI Tool</figcaption>
                        </figure>
                    </a>
                    <a href='https://www.youtube.com/watch?v=AyzLXCZk7ic'>Video Demo</a>
                </div>
    </div>
  </div>
  );
}

export default Portfolio;