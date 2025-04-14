import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  CgCPlusPlus,
} from "react-icons/cg";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiJava,
  DiPython,
  DiPhp,
  DiMysql,
  DiSqllite,
  DiGit,
  DiGithub,
  DiReact,
  DiNodejs,
  DiDocker,
  DiDebian,
  DiUbuntu,
  DiWindows,
  DiWordpress,
  DiAndroid,
  DiDatabase,
  DiAws,
  DiNpm,
  DiDotnet,
  DiWebplatform,
  DiRasberryPi,
  DiNginx,
} from "react-icons/di";
import {
  SiTypescript,
  SiLua,
  SiFirebase,
  SiGodotengine,
  SiUnity,
  SiUnrealengine,
  SiOpengl,
  SiCisco,
  SiCloudflare,
  SiNgrok,
  SiSelenium,
  SiOpenstreetmap,
  SiFlask,
  SiRedis,
  SiPostgresql,
  SiNextdotjs,
  SiSolidity,
} from "react-icons/si";

function Techstack() {
  const sections = {
    "Languages": [
      <CgCPlusPlus />, <DiJavascript />, <SiTypescript />, <DiJava />,
      <DiPython />, <DiPhp />, <SiLua />
    ],
    "Frontend / UI": [
      <DiHtml5 />, <DiCss3 />, <DiReact />, <SiNextdotjs />
    ],
    "Backend / Frameworks": [
      <DiNodejs />, <DiDotnet />, <SiFlask />
    ],
    "Game Engines / Graphics": [
      <SiGodotengine />, <SiUnity />, <SiUnrealengine />, <SiOpengl />
    ],
    "Databases": [
      <DiMysql />, <DiSqllite />, <SiFirebase />, <SiRedis />, <SiPostgresql />, <DiDatabase />
    ],
    "DevOps & Tools": [
      <DiGit />, <DiGithub />, <DiDocker />, <DiNpm />, <SiNgrok />, <DiAws />
    ],
    "Cybersecurity / Networking": [
      <SiSelenium />, <SiCisco />, <SiCloudflare />
    ],
    "Platforms / OS": [
      <DiUbuntu />, <DiDebian />, <DiWindows />, <DiRasberryPi />
    ],
    "CMS & Others": [
      <DiWordpress />, <SiOpenstreetmap />
    ]
  };

  return (
    <div>
      {Object.entries(sections).map(([category, icons], index) => (
        <div key={index}>
          <h4 style={{ marginTop: "30px", marginBottom: "15px", textAlign: "center", color: "#fff" }}>
            {category}
          </h4>
          <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
            {icons.map((Icon, i) => (
              <Col key={i} xs={4} md={2} className="tech-icons">
                {Icon}
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
