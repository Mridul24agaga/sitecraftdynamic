// Projects.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.png';


import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const projectStyle = {
  textDecoration: 'none', // Remove underline
  color: 'white', // Set text color to white
};

export const Projects = () => {
  const projects = [
    {
      title: 'Bibado',
      imgUrl: projImg1,
      link: 'https://bibado.lt/',
    },
    {
      title: 'Darturcrafts',
      imgUrl: projImg2,
      link: 'https://www.darturcrafts.lv/',
    },
    {
      title: 'Tapeter',
      imgUrl: projImg3,
      link: 'https://tapeter.eu/',
    },
    {
      title: 'Gartsidestreetdental',
      imgUrl: projImg6,
      link: 'https://gartsidestreetdental.com/',
    },
    {
      title: 'Midea Creative group',
      imgUrl: projImg5,
      link: 'https://midea-new-website-gitmanager10.vercel.app/',
    },
    {
      title: 'My USA Business',
      imgUrl: projImg4,
      link: 'https://mub-new-website-gitmanager10.vercel.app/',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <Row>
                    {projects.map((project, index) => (
                      <Col md={4} className="mb-4" key={index}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={projectStyle} // Apply the style
                        >
                          <img src={project.imgUrl} alt={project.title} />
                        </a>
                        <h3>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={projectStyle} // Apply the style
                          >
                            {project.title}
                          </a>
                        </h3>
                        {/* You can add a description if needed */}
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
