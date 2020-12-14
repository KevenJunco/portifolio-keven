import React from 'react';


function Education() {
  return (  
     <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Faculdade Pitagoras</h3>
                <div className="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science - Web Development Track</div>
                {/* <p>GPA: 3.23</p> */}
              </div>
             <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2015 - Dec 2019</span>
             </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Universidade norte do Paraná</h3>
              <div className="subheading mb-3">Technology for web applications</div>
              {/* <p>GPA: 3.56</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2020 - Oct 2020</span>
            </div>
          </div>
          </div>
   </section>
 );
}

export default Education;