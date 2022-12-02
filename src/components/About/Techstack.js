import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql
} from "react-icons/di";
import {
  SiFirebase
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons"><h3>Python</h3>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>Java</h3>
        <DiJava/>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>C++</h3>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>Java Script</h3>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>Nodejs</h3>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>Reactjs</h3>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>MongoDb</h3>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>MySql</h3>
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>Git</h3>
        <DiGit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons"><h3>Firebase</h3>
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
