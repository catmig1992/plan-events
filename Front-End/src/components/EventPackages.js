import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import "../App.css";

export default function EventPackages() {
  return (
    <div className="packages">
      <header className="packages-header">
        <h2>Packages</h2>
        <CardGroup>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Weddings</Card.Title>
              <ListGroup className="package-list">
                <ListGroup.Item action href="budget">
                  Budget Package
                </ListGroup.Item>
                <ListGroup.Item action href="glam">
                  Glam Package
                </ListGroup.Item>
                <ListGroup.Item action href="shimmer">
                  Shimmer Package
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Celebrations</Card.Title>
              <ListGroup className="package-list">
                <ListGroup.Item action href="birthday">
                  Birthday Package
                </ListGroup.Item>
                <ListGroup.Item action href="anniversary">
                  Anniversary Package
                </ListGroup.Item>
                <ListGroup.Item action href="graduation">
                  Graduation Package
                </ListGroup.Item>
                <ListGroup.Item action href="holiday">
                  Holiday Package
                </ListGroup.Item>
                <ListGroup.Item action href="reunion">
                  Family Reunion Package
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Corporate Events</Card.Title>
              <ListGroup className="package-list">
                <ListGroup.Item action href="classic">
                  Classic Package
                </ListGroup.Item>
                <ListGroup.Item action href="corp-holiday">
                  Holiday Package
                </ListGroup.Item>
                <ListGroup.Item action href="mixer">
                  Mixer Package
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Build Your Event</Card.Title>
              <ListGroup className="package-list">
                <ListGroup.Item action href="form">
                  Form
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </CardGroup>
      </header>
    </div>
  );
}
