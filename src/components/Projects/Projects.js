import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import table from "../../Assets/Projects/table.png";
import pasword from "../../Assets/Projects/pasword.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={table}
              isBlog={false}
              title="Table App"
              description="A basic Mathematics Table app."
              ghLink="https://github.com/SetuSingh17/Maths_Table_APP"
              
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={pasword}
              isBlog={false}
              title="Password Generator"
              description="Basic Pasword Generator"
              ghLink="https://github.com/SetuSingh17/password-generator"
            />
          </Col>        

          
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
