import React from 'react';

function Awards() {
  return ( <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="awards"
  >
    <div className="w-100">
      <h2 className="mb-5">Awards &amp; Certifications</h2>
      <ul className="fa-ul mb-0">
        <li>
          <i className="fa-li fa fa-trophy text-warning"></i>
          Fullstack Developer - Node/React/ReactNative - Rocketseat Certification
        </li>
        <li>
          <i className="fa-li fa fa-trophy text-warning"></i>
          Acronis Certified Engineer
        </li>
        <li>
          <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
          Place - Pitágoras University - Sciences Conf. 2019
        </li>
        <li>
          <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
          Place - Pitágoras University - Hackathon 2016
        </li>
       
      </ul>
    </div>
  </section>
  );
}

export default Awards;