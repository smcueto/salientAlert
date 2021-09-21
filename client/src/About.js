import React from 'react';
import './index.css';

function About() {
    return (
        <div className="aboutSummary">
           
            <img src="network-people.png" alt="networkOfPeople"></img>
            <br />
            <h2><a href="http://salientalert.com/" rel="noopener noreferrer" className="title">Salient Alert </a> </ h2>
            <p className="aboutText"><a id="oneliner">Is an online community help report ICE raids and Checkpoints in your area.</a> <br /> <br />
                
                Reports are a community effort and these post reported and validated by the community. In the past years we have seen a rise of violence against the undocumented community that lives in United States.<br /> Community organizing is as a response to the injusteces we have seen be done to the undocumented community. <br /> <br />
                
                No personal data is collected on this platform. The only data collected are reports and validations.<br /> <br />
                </ p>
            
            <img src="GitHub-Mark-120px-plus.png" alt="githubLogo" className="github"></img>
            <p>Open Source</p>
          
        </div>
    );
}
export default About;
