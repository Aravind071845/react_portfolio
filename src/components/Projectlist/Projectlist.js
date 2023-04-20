import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import portfolio from "../Assets/second image (2).png"
import router from "../Assets/router.png"
import travel from "../Assets/first image.png"

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={travel}
                isBlog={false}
                title="Travel Website"
                description="This project is  a travel website which is to travel to the beaches.It is used to select destinations,date of going and returning.Then the slots are booked as per the availability."
                ghLink="https://github.com/Aravind071845/traveler_react"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portfolio}
                isBlog={false}
                title="Personal Portfolio"
                description="It is a personal portfolio website.It is developed using reactjs,bootstrap,cascading style sheets,html.It has five different types of components.They are home,About,Skills,About and footer."
                ghLink="https://github.com/Aravind071845/traveler_react"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={router}
                isBlog={false}
                title="React Router"
                description="It is a simple react router project builded using react router dom and by applying some basic designs to the content through css etc.It consists of several components which will navigate to the other components. "
                ghLink="https://github.com/Aravind071845/react_day9"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist