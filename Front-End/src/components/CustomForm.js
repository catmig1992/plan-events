import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../App.css";
import "react-calendar/dist/Calendar.css";

//Add Flower Arrangement/Style Form Fields

export default function CustomForm() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="form">
      <header className="form-header">
        <h1 className="form-title">Get the Party Started!</h1>
      </header>
      <main>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Label>Event Description</Form.Label>
              <Form.Control placeholder="Example: Sophia & Oliver's Wedding" />
            </Col>
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

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEventHall">
              <Form.Label>Event Hall</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Enchantment Hall</option>
                <option>Rendezvous Hall</option>
                <option>Oasis Hall</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMealService">
              <Form.Label>Meal Service</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Buffet</option>
                <option>Sit-Down</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridFoodRestrictions">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Food Restrictions"
            />
            <Form.Control placeholder="List out food restrictions - Example: Vegan Diet, Nut Allergy, etc." />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridAppetizers">
            <Form.Label>Appetizer Options</Form.Label>
            <Form.Check type="checkbox" label="Bacon Wrapped Shrimp" />
            <Form.Check type="checkbox" label="Bruschetta Toast - Vegetarian" />
            <Form.Check type="checkbox" label="Egg Rolls - Vegetarian" />
            <Form.Check type="checkbox" label="Fruit Skewers" />
            <Form.Check type="checkbox" label="Assorted Kebab" />
            <Form.Check type="checkbox" label="Meatball" />
            <Form.Check type="checkbox" label="Sashimi Nachos" />
            <Form.Check type="checkbox" label="Spring Rolls" />
            <Form.Control placeholder="Special Requests" />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridEntrées">
            <Form.Label>Entrée Options</Form.Label>
            <Form.Check type="checkbox" label="Filet Mignon" />
            <Form.Control placeholder="Quantity" />
            <Form.Check type="checkbox" label="Grilled Chicken" />
            <Form.Control placeholder="Quantity" />
            <Form.Check type="checkbox" label="Grilled Fish" />
            <Form.Control placeholder="Quantity" />
            <Form.Check type="checkbox" label="Vegan Dish" />
            <Form.Control placeholder="Quantity" />
            <Form.Check type="checkbox" label="Kids Meal - Chicken" />
            <Form.Control placeholder="Quantity" />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridDesserts">
            <Form.Label>Dessert Options</Form.Label>
            <Form.Check type="checkbox" label="Chocolate Cake" />
            <Form.Check type="checkbox" label="Vanilla Cake" />
            <Form.Check type="checkbox" label="Red Velvet Cake" />
            <Form.Check type="checkbox" label="Cream Puffs" />
            <Form.Check type="checkbox" label="Fruit Tarts" />
            <Form.Check type="checkbox" label="Assorted Macarons" />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridBeverages">
            <Form.Label>Self Service Non-Alcoholic Beverage Table</Form.Label>
            <Form.Check type="checkbox" label="Apple Juice" />
            <Form.Check type="checkbox" label="Orange Juice" />
            <Form.Check type="checkbox" label="Pineapple Juice" />
            <Form.Check type="checkbox" label="Sprite" />
            <Form.Check type="checkbox" label="Sprite Zero" />
            <Form.Check type="checkbox" label="7Up" />
            <Form.Check type="checkbox" label="Diet 7Up" />
            <Form.Check type="checkbox" label="Coke" />
            <Form.Check type="checkbox" label="Diet Coke" />
            <Form.Check type="checkbox" label="Ginger Ale" />
            <Form.Check type="checkbox" label="Dr. Pepper" />
            <Form.Control placeholder="Special Requests" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridBarService">
              <Form.Label>Bar Service</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Cash Bar</option>
                <option>Open Bar</option>
                <option>Combination Cash & Open Bar</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCashBarTime">
              <Form.Label>Cash Bar Start Time</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
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

            <Form.Group as={Col} controlId="formGridCashBarTime">
              <Form.Label>Cash Bar End Time</Form.Label>
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
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridOpenBarTime">
              <Form.Label>Open Bar Start Time</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
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

            <Form.Group as={Col} controlId="formGridOpenBarTime">
              <Form.Label>Open Bar End Time</Form.Label>
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
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFurnitureStyles">
              <Form.Label>Furniture Style</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Classic</option>
                <option>Modern</option>
                <option>Rustic</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTableStyles">
              <Form.Label>Table Style</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Round Table for 6</option>
                <option>Round Table for 8</option>
                <option>Round Table for 10</option>
                <option>Round Table for 12</option>
                <option>Rectangular Table for 6</option>
                <option>Rectangular Table for 8</option>
                <option>Rectangular Table for 10</option>
                <option>Rectangular Table for 12</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridMusic">
              <Form.Label>Music Options</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>DJ</option>
                <option>Live Band</option>
                <option>Solo Artist</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFlowers">
              <Form.Label>Flower Arrangement Options</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Red, Pink and White Rose Table Arrangements</option>
                <option>Pink, Yellow and White Rose Table Arrangements</option>
                <option>
                  Pink and White Lilies with Lilac Table Arrangements
                </option>
                <option>
                  Pink and White Chrysanthemums with Marigold Table Arrangements
                </option>
                <option>
                  Pink, Purple and Yellow Tulips with White Daffodil Table
                  Arrangements
                </option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group className="mb-3" id="formGridEntertainment">
              <Form.Label>Entertainment Options</Form.Label>
              <Form.Check type="checkbox" label="Magician" />
              <Form.Check type="checkbox" label="Photo Booth" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </main>
      <footer>
        <p>Plan with us!</p>
      </footer>
    </div>
  );
}
