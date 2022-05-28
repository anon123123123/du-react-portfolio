import React from 'react';
// Here we are importing a CSS file as a dependency

function Resume() {
    return (
        <div className='card'>
            <div className='card-header'>Resume</div>
            <div className='card-content'>
                <h3>Experience</h3>
                <p>
                    I'm baby affogato kogi shabby chic, pabst kinfolk bespoke fixie fashion axe snackwave 

                </p>
                <h3>Job History</h3>
                <p>
                    3 wolf moon coloring book tonx hexagon gastropub af tumblr heirloom mlkshk 
                </p>
                <h3>Related Work</h3>
                <p>
                    Tousled post-ironic schlitz, shaman cliche food truck subway tile mlkshk four dollar toast. Yuccie hammock post-ironic, pug green juice pickled swag keytar 90's taiyaki viral mustache fixie. Thundercats bushwick cardigan poke DIY chillwave. Truffaut tote bag vexillologist letterpress. Austin sriracha irony post-ironic mustache, yuccie actually distillery franze
                </p>
                <a href='resume.txt' download>Download</a>
            </div>
        </div>
    );
}

export default Resume;