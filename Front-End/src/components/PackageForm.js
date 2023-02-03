import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../App.css";
import "react-calendar/dist/Calendar.css";

export default function PackageForm() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="form">
      <header className="form-header">
        <h1 className="form-title">Get the Party Started!</h1>
      </header>
      <main className="form-detail">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEventPackage">
              <Form.Label>Event Package</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Wedding - Budget Package</option>
                <option>Wedding - Glam Package</option>
                <option>Wedding - Shimmer Package</option>
                <option>Celebrations - Birthday Package</option>
                <option>Celebrations - Anniversary Package</option>
                <option>Celebrations - Graduation Package</option>
                <option>Celebrations - Holiday Package</option>
                <option>Celebrations - Family Reunion Package</option>
                <option>Corporate - Classic Package</option>
                <option>Corporate - Holiday Package</option>
                <option>Corporate - Mixer Package</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPartySize">
              <Form.Label>Party Size</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Up to 150</option>
                <option>Up to 200</option>
                <option>Up to 250</option>
                <option>Up to 300</option>
                <option>Up to 350</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStartTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>09:00AM</option>
                <option>09:30AM</option>
                <option>10:00AM</option>
                <option>10:30AM</option>
                <option>11:00AM</option>
                <option>11:30AM</option>
                <option>12:00PM</option>
                <option>12:30PM</option>
                <option>01:00PM</option>
                <option>01:30PM</option>
                <option>02:00PM</option>
                <option>02:30PM</option>
                <option>03:00PM</option>
                <option>03:30PM</option>
                <option>04:00PM</option>
                <option>04:30PM</option>
                <option>05:00PM</option>
                <option>05:30PM</option>
                <option>06:00PM</option>
                <option>06:30PM</option>
                <option>07:00PM</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEndTime">
              <Form.Label>End Time</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>02:00PM</option>
                <option>02:30PM</option>
                <option>03:00PM</option>
                <option>03:30PM</option>
                <option>04:00PM</option>
                <option>04:30PM</option>
                <option>05:00PM</option>
                <option>05:30PM</option>
                <option>06:00PM</option>
                <option>06:30PM</option>
                <option>07:00PM</option>
                <option>07:30PM</option>
                <option>08:00PM</option>
                <option>08:30PM</option>
                <option>09:00PM</option>
                <option>09:30PM</option>
                <option>10:00PM</option>
                <option>10:30PM</option>
                <option>11:00PM</option>
                <option>11:30PM</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row>
            <div className="calendar-container">
              <Calendar onChange={setDate} value={date} />
            </div>
            <p className="text-center">
              <span className="bold">Selected Date:</span> {date.toDateString()}
            </p>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control placeholder="Enter phone number" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridFoodRestrictions">
            <Form.Label>Food Restrictions</Form.Label>
            <Form.Control placeholder="List out food restrictions - Example: Vegan Diet, Nut Allergy, etc." />
          </Form.Group>

          <div>
            <Button
              className="BackButton"
              variant="secondary"
              action
              href="/eventPackages"
            >
              Back
            </Button>
          </div>
          <br />
          <div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </main>
      <footer>
        <p>Plan with us!</p>
      </footer>
    </div>
  );
}
