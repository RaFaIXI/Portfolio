import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rafael SOLEVIOLANTHOMAS </span>
            from <span className="purple"> Lyon, France.</span>
            <br />
            I am currently a Junior Developer in Apprenticeship at GreenWITS.
            <br />
            I am currently studying at SUPINFO in Lyon, pursuing a Master of Engineering.
            <br />
            <br />
            Some activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Tech & Development :Video editing for YouTube, Game and app development, PenTesting (ethical hacking), Regular participant in game jams
            </li>

            <br/>
            <li className="about-activity">
              <ImPointRight /> Gaming : Esports competitor and tournament organizer for Super Smash Bros.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> Sports : Trail running and strength training since 2019. Former football player and lifelong fan.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Training makes perfect"{" "}
          </p>
          <footer className="blockquote-footer">Cristiano Ronaldo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
