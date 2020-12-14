import React from 'react';

import BubbleChart from '@weknow/react-bubble-chart-d3';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Resume from '../components/sections/Resume';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Interests from '../components/sections/Interests';
import Awards from '../components/sections/Awards';
import config from '../../config';

const skillsData = [
  { label: 'HTML', value: 90 },
  { label: 'CSS', value: 85 },
  { label: 'JavaScript', value: 80 },
  { label: 'React', value: 80 },
  { label: 'TypeScript', value: 70 },
  { label: 'React Native', value: 22 },
]


const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <Resume 
      firstName={config.firstName}
      lastName={config.lastName}
      address={config.address}
      phone={config.phone}
      email={config.email}
      socialLinks={config.socialLinks}
      />
       <hr className="m-0" />
      <Experience 
      activity={'Support Engineer'}
      company={'Microhard Ltda.'}
      description={'dasdas'}
      initialDate={'March - 2020'}
      />
      <hr className="m-0" />
      <Education />
        <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
       <BubbleChart
            padding={0}
            showLegend
            data={skillsData}
          />
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>
        <hr className="m-0" />
      <Interests />
          <hr className="m-0" />
       <Awards />
         </div>
  </Layout>
);

export default IndexPage;
