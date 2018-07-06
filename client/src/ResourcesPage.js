import React from 'react';
import './index.css';

function ResourcesPage() {
  return (
    <div className="resources-list">
      <h1>Resources:</h1>
      <br />
      <ul>
        <li><a href="https://notifica.us/" target="_blank">Notifica</a><br /> "The first app to prepare you and your family against deportation."</li><br />
        <li><a href="http://sfilen.org/blog/new-hotline-gives-san-francisco-residents-a-way-to-report-ice-immigration-raids-and-protect-neighbors/" target="_blank">SFILEN</a><br /> The San Francisco Immigrant Legal & Education Network (SFILEN) set up the hotline at (415) 200-1548 to give the community a one-stop shop to report ICE raids. </li> <br />
        <li><a href="https://www.aclu.org/know-your-rights/what-do-if-immigration-agents-ice-are-your-door" target="_blank">ACLU</a> <br /> KNOW YOUR RIGHTS: WHAT TO DO IF IMMIGRATION AGENTS (ICE) ARE AT YOUR DOOR</li>
      </ul>
    </div>
  );
}
export default ResourcesPage;
