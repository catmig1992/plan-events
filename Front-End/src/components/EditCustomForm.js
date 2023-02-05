import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../App.css";
import "react-calendar/dist/Calendar.css";

//Pass in {events}

export default function EditCustomForm() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="form">
      <header className="form-header">
        <h1 className="form-title">Get the Party Started!</h1>
        <h2>Edit your event</h2>
      </header>
      <main>
        <Form action={`/events/${event.id}?_method=PUT`} method="POST">
          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="eventDescription">
                Event Description
              </Form.Label>
              <Form.Control type="text" defaultValue={event.eventDescription} />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPartySize">
              <Form.Label htmlFor="partySize">Party Size</Form.Label>
              <Form.Select defaultValue={event.partySize}>
                <option>Choose...</option>
                <option>Up to 150</option>
                <option>Up to 200</option>
                <option>Up to 250</option>
                <option>Up to 300</option>
                <option>Up to 350</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStartTime">
              <Form.Label htmlFor="startTime">Start Time</Form.Label>
              <Form.Select defaultValue={event.startTime}>
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
              <Form.Label htmlFor="endTime">End Time</Form.Label>
              <Form.Select defaultValue={event.endTime}>
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
            <Form.Label htmlFor="eventDate">Event Date</Form.Label>
            <div className="calendar-container">
              <Calendar onChange={setDate} defaultValue={event.eventDate} />
            </div>
            <p className="text-center">
              <span className="bold">Selected Date:</span> {date.toDateString()}
            </p>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control type="text" defaultValue={event.firstName} />
            </Col>
            <Col>
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control type="text" defaultValue={event.lastName} />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" defaultValue={event.email} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
              <Form.Control type="number" defaultValue={event.phoneNumber} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEventHall">
              <Form.Label htmlFor="eventHall">Event Hall</Form.Label>
              <Form.Select defaultValue={event.eventHall}>
                <option>Choose...</option>
                <option>Enchantment Hall</option>
                <option>Rendezvous Hall</option>
                <option>Oasis Hall</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMealService">
              <Form.Label htmlFor="mealService">Meal Service</Form.Label>
              <Form.Select defaultValue={event.mealService}>
                <option>Choose...</option>
                <option>Buffet</option>
                <option>Sit-Down</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridFoodRestrictions">
            <Form.Label htmlFor="foodRestrictions">
              Food Restrictions
            </Form.Label>
            <Form.Control type="text" defaultValue={event.foodRestrictions} />
          </Form.Group>

          {/* Not sure if this syntax would bring back the checkbox options selected */}
          <Form.Group className="mb-3" id="formGridAppetizers">
            <Form.Label htmlFor="appetizerOptions">
              Appetizer Options
            </Form.Label>
            <Form.Check
              type="checkbox"
              label="Bacon Wrapped Shrimp"
              id="baconWrappedShrimp"
              defaultValue={event.baconWrappedShrimp}
            />
            <Form.Check
              type="checkbox"
              label="Bruschetta Toast - Vegetarian"
              id="bruschettaToast"
              defaultValue={event.bruschettaToast}
            />
            <Form.Check
              type="checkbox"
              label="Egg Rolls - Vegetarian"
              id="eggRolls"
              defaultValue={event.appetizerOptions}
            />
            <Form.Check
              type="checkbox"
              label="Fruit Skewers"
              id="fruitSkewers"
              defaultValue={event.appetizerOptions}
            />
            <Form.Check
              type="checkbox"
              label="Assorted Kebab"
              id="kebab"
              defaultValue={event.appetizerOptions}
            />
            <Form.Check
              type="checkbox"
              label="Meatball"
              id="meatball"
              defaultValue={event.appetizerOptions}
            />
            <Form.Check
              type="checkbox"
              label="Sashimi Nachos"
              id="sashimiNachos"
              defaultValue={event.appetizerOptions}
            />
            <Form.Check
              type="checkbox"
              label="Spring Rolls"
              id="springRolls"
              defaultValue={event.appetizerOptions}
            />
            <Form.Control type="text" defaultValue={event.appetizerOptions} />
          </Form.Group>

          {/* Not sure if this syntax would bring back the checkbox options selected */}
          <Form.Group className="mb-3" id="formGridEntrées">
            <Form.Label htmlFor="entreeOptions">Entrée Options</Form.Label>
            <Form.Check
              type="checkbox"
              label="Filet Mignon"
              id="mignon"
              defaultValue={event.entreeOptions}
            />
            <Form.Control type="checkbox" defaultValue={event.entreeOptions} />
            <Form.Check
              type="checkbox"
              label="Grilled Chicken"
              id="chicken"
              defaultValue={event.entreeOptions}
            />
            <Form.Control type="checkbox" defaultValue={event.entreeOptions} />
            <Form.Check
              type="checkbox"
              label="Grilled Fish"
              id="fish"
              defaultValue={event.entreeOptions}
            />
            <Form.Control type="checkbox" defaultValue={event.entreeOptions} />
            <Form.Check
              type="checkbox"
              label="Vegan Dish"
              id="vegan"
              defaultValue={event.entreeOptions}
            />
            <Form.Control type="checkbox" defaultValue={event.entreeOptions} />
            <Form.Check
              type="checkbox"
              label="Kids Meal - Chicken"
              id="kidsMeal"
              defaultValue={event.entreeOptions}
            />
            <Form.Control type="checkbox" defaultValue={event.entreeOptions} />
          </Form.Group>

          {/* Not sure if this syntax would bring back the checkbox options selected */}
          <Form.Group className="mb-3" id="formGridDesserts">
            <Form.Label htmlFor="dessertOptions">Dessert Options</Form.Label>
            <Form.Check
              type="checkbox"
              label="Chocolate Cake"
              id="chocolateCake"
              defaultValue={event.dessertOptions}
            />
            <Form.Check
              type="checkbox"
              label="Vanilla Cake"
              id="vanillaCake"
              defaultValue={event.dessertOptions}
            />
            <Form.Check
              type="checkbox"
              label="Red Velvet Cake"
              id="redVelvetCake"
              defaultValue={event.dessertOptions}
            />
            <Form.Check
              type="checkbox"
              label="Cream Puffs"
              id="creamPuffs"
              defaultValue={event.dessertOptions}
            />
            <Form.Check
              type="checkbox"
              label="Fruit Tarts"
              id="fruitTarts"
              defaultValue={event.dessertOptions}
            />
            <Form.Check
              type="checkbox"
              label="Assorted Macarons"
              id="macarons"
              defaultValue={event.dessertOptions}
            />
          </Form.Group>

          {/* Not sure if this syntax would bring back the checkbox options selected */}
          <Form.Group className="mb-3" id="formGridBeverages">
            <Form.Label htmlFor="nonalcoholicBeverage">
              Self Service Non-Alcoholic Beverage Table
            </Form.Label>
            <Form.Check
              type="checkbox"
              label="Apple Juice"
              id="appleJuice"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Check
              type="checkbox"
              label="Orange Juice"
              id="orangeJuice"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Check
              type="checkbox"
              label="Pineapple Juice"
              id="pineappleJuice"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Check
              type="checkbox"
              label="Sprite"
              id="sprite"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Check
              type="checkbox"
              label="Sprite Zero"
              id="spriteZero"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Check
              type="checkbox"
              label="7Up"
              id="7Up"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Check
              type="checkbox"
              label="Diet 7Up"
              id="diet7Up"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Check
              type="checkbox"
              label="Coke"
              id="coke"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Check
              type="checkbox"
              label="Diet Coke"
              id="dietCoke"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Check
              type="checkbox"
              label="Ginger Ale"
              id="gingerAle"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Check
              type="checkbox"
              label="Dr. Pepper"
              id="drPepper"
              defaultValue={event.nonalcoholicBeverage}
            />
            <Form.Control defaultValue={event.nonalcoholicBeverage} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridBarService">
              <Form.Label htmlFor="barService">Bar Service</Form.Label>
              <Form.Select defaultValue={event.barService}>
                <option>Choose...</option>
                <option>Cash Bar</option>
                <option>Open Bar</option>
                <option>Combination Cash & Open Bar</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCashBarTime">
              <Form.Label htmlFor="cashBarStartTime">
                Cash Bar Start Time
              </Form.Label>
              <Form.Select defaultValue={event.cashBarStartTime}>
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
              <Form.Label htmlFor="cashBarEndTime">
                Cash Bar End Time
              </Form.Label>
              <Form.Select defaultValue={event.cashBarEndTime}>
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
              <Form.Label htmlFor="openBarStartTime">
                Open Bar Start Time
              </Form.Label>
              <Form.Select defaultValue={event.openBarStartTime}>
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
              <Form.Label htmlFor="openBarEndTime">
                Open Bar End Time
              </Form.Label>
              <Form.Select defaultValue={event.openBarEndTime}>
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
              <Form.Label htmlFor="furnitureStyle">Furniture Style</Form.Label>
              <Form.Select defaultValue={event.furnitureStyle}>
                <option>Choose...</option>
                <option>Classic</option>
                <option>Modern</option>
                <option>Rustic</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTableStyles">
              <Form.Label htmlFor="tableStyle">Table Style</Form.Label>
              <Form.Select defaultValue={event.tableStyle}>
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
              <Form.Label htmlFor="musicOptions">Music Options</Form.Label>
              <Form.Select defaultValue={event.musicOptions}>
                <option>Choose...</option>
                <option>DJ</option>
                <option>Live Band</option>
                <option>Solo Artist</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFlowers">
              <Form.Label htmlFor="flowerArrangement">
                Flower Arrangement Options
              </Form.Label>
              <Form.Select defaultValue={event.musicOptions}>
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
              <Form.Label htmlFor="entertainmentOptions">
                Entertainment Options
              </Form.Label>
              <Form.Check
                type="checkbox"
                label="Magician"
                id="magician"
                defaultValue={event.entertainmentOptions}
              />
              <Form.Check
                type="checkbox"
                label="Photo Booth"
                id="photoBooth"
                defaultValue={event.entertainmentOptions}
              />
            </Form.Group>
          </Row>

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
