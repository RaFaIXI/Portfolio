import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCard2 from "./ProjectCards2";
import ProjectCardPrivate from "./ProjectCardsPrivate";

import Particle from "../Particle";
import moovollley from "../../Assets/Projects/moovolley.png";
import RaspberryPiWebApp from "../../Assets/Projects/RaspberryPiWebApp.png";
import Ruches from "../../Assets/Projects/ruches2.png";
import selenium from "../../Assets/Projects/selenium-python-tutorial-webdriv.png";

import codeedit from "../../Assets/Projects/codeEditor.png";

import SimpleCardGame from "../../Assets/Projects/SimpleCardGame.png";

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
              imgPath={RaspberryPiWebApp}
              isBlog={false}
              title="RaspberryPiWebApp"
              description="WebApp built with React in HTML/CSS and JS to see in real time my raspberry pi 4 server status (usefull for my other projects) its a tryhackme website too  i secured it you can try hack it all info on the webapp !!!"
              ghLink="https://github.com/RaFaIXI/RaspberryPiWebApp"
              demoLink="https://rafaixi.github.io/RaspberryPiWebApp/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCardPrivate
              imgPath={SimpleCardGame}
              isBlog={false}
              title="Simple-Anime-TCG"
              description="My actual project, its a mobile and web game that allow you to play a card game with your friends. you can collect them or fight with them. you have to build your deck and play against your friends. The game as an accounts system, progression system, Vip system, quests, battle system, online market in real time, casino, random booster pack and im working on his security and on a a better UI and more features."
              Link="https://rafaixi.itch.io/"    

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moovollley}
              isBlog={false}
              title="Moovollley"
              description="Online P2P Sync Volleyball Game in 2D made with python, C# and Godot in upgrade to add more features and a better UI. The game is a mix between volleyball and fighting game where you hit the ball with fight moves and powers to kick it, where you have to throw the ball to the other side of the net.. The game is in upgrade to add accounts system, progression system, a better UI and more features."
              ghLink="https://github.com/RaFaIXI/game-updates-moovollley"
              demoLink="https://rafaixi.itch.io/moovolley"    
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={selenium}
              isBlog={false}
              title="WebScrapping concert"
              description="BTS Internship Project at IdentiteDigital Corp. A Selenium + BeautifulSoup web scraping project that scrapes Facebook Events to get the list of concerts and their details and save them on a database that is used on Concert Agenda. The project uses Python and Selenium to automate the web scraping process, and BeautifulSoup to parse the HTML content. The scraped data is then stored in a CSV file for further analysis."
            />
          </Col>
 


          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={Ruches}
              isBlog={false}
              title="Gestion de ruches"
              description="Final BTS qualification project. Connected beehive monitoring system that allows beekeepers to remotely track their hives through a mobile app and website. The system collects data (hive weight, temperature, humidity, light levels, and can detect movement/theft attempts.), uses ZigBee for local communication between hives and a central station, which then transmits data via GSM to a server. The project includes a REST web service, MySQL database, web interface and mobile app built with Godot and Expo. Securised (RSA encryption, SSL...)"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
