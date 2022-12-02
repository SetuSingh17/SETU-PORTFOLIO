import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiEclipseide,
  SiAndroidstudio
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><h3>Visualstudiocode</h3>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>Androidstudio</h3>
        <SiAndroidstudio />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons"><h3>Eclipseide</h3>
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>Postman</h3>
        <SiPostman />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
