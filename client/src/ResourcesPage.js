import React from 'react';
import './index.css';
import './App.css';
// import { auto } from 'async';

function ResourcesPage() {

  const azul = {
    overflow: "scroll",
    position: "relative",
    // backgroundColor: "DodgerBlue",
    height: "600px",
    marginTop: "70px"
    
  };
  const navBar = {
    marginTop: "70px"
  };


  return (
    <div>
      <div className="container">
        <nav className="nav">
          <div className="col-3">
            <nav id="navbar-example3" className="navbar navbar-light bg-light" style={navBar}>
            <a className="navbar-brand"><b>Resources</b></a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link" href="#Apps">Apps</a>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link ml-3 my-1" href="#Notifica">Notifica</a>
                {/* <a className="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a> */}
              </nav>
              <a className="nav-link" href="#YourRights">Your Rights</a>
              <a className="nav-link ml-3 my-1" href="#ACLU">ACLU</a>
              {/* <a className="nav-link ml-3 my-1" href="#item-2-2">Item 2-2</a> */}
              <a className="nav-link" href="#Orgs">Organizations</a>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link ml-3 my-1" href="#SFILEN">SFILEN</a>
                {/* <a className="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a> */}
              </nav>
            </nav>
          </nav>
        </div>
        
        <div className="col-9" style={azul}>
          <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
            <h4 id="Apps">Apps</h4>
              <p>This sections shares app you can download to help undocumented communities. </p>
            <h5 id="Notifica"><a href="https://notifica.us/" target="_blank" rel="noopener noreferrer"> Notifica</a></h5>
              <p>The first app to prepare you and your family against deportation.</p>
            {/* <h5 id="item-1-2">Item 1-2</h5>
              <p>...</p> */}
            <h4 id="YourRights">Your Rights</h4>
            <p>Links to help undocumented people know their rights in case they face ICE or Police.</p>
            <h5 id="ACLU"><a href="https://www.aclu.org/know-your-rights/what-do-if-immigration-agents-ice-are-your-door" target="_blank" rel="noopener noreferrer">ACLU</a></h5>
            <p>Know Your Rights: What To Do if Immigration Agents (ICE) are at Your Door</p>
            {/* <h5 id="item-2-2">Item 2-2</h5>
            <p>...</p> */}
            <h4 id="Orgs">Misc Organizations</h4>
              <p>Non-profit Orginizations that help undocumented communities</p>
            <h5 id="SFILEN"><a href="http://sfilen.org/blog/new-hotline-gives-san-francisco-residents-a-way-to-report-ice-immigration-raids-and-protect-neighbors/" target="_blank" rel="noopener noreferrer">SFILEN</a> </h5>
            <p>The San Francisco Immigrant Legal & Education Network (SFILEN) set up the hotline at (415) 200-1548 to give the community a one-stop shop to report ICE raids.</p>
            {/* <h5 id="item-3-2">Item 3-2</h5>
              <p> </p> */}
          </div>
        </div>
        </nav>
      </div>
</div>

  );
}
export default ResourcesPage;
