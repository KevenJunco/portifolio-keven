import React from 'react';


function Experience({activity, company, description, initialDate }) {
  return (
    <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
  >
    <div className="w-100">
      <h2 className="mb-5">Experience</h2>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">{activity}</h3>
          <div className="subheading mb-3">{company}</div>
          <p>
            {description}
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{initialDate}</span>
        </div>
      </div>  
    </div>
  </section>
  );
}

export default Experience;