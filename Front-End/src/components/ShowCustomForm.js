import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import "react-calendar/dist/Calendar.css";

//Pass in {events}

export default function ShowCustomForm() {
  return (
    <div className="form">
      <header className="form-header">
        <h1 className="form-title">Get the Party Started!</h1>
        <h2>{event.name}</h2>
      </header>
      <main>
        <p>Event Description: {event.eventDescription}</p>
        <p>Party Size: {event.partySize}</p>
        <p>Start Time: {event.startTime}</p>
        <p>End Time: {event.endTime}</p>
        <p>Event Date: {event.eventDate}</p>
        <p>First Name: {event.firstName}</p>
        <p>Last Name: {event.lastName}</p>
        <p>Email: {event.email}</p>
        <p>Phone Number: {event.phoneNumber}</p>
        <p>Event Hall: {event.eventHall}</p>
        <p>Meal Service: {event.mealService}</p>
        <p>Food Restrictions: {event.foodRestrictions}</p>
        <p>Appetizer Options: {event.appetizerOptions}</p>
        <p>Entrée Options: {event.entreeOptions}</p>
        <p>Dessert Options: {event.dessertOptions}</p>
        <p>Non-Alcoholic Beverage Options: {event.nonalcoholicBeverage}</p>
        <p>Bar Service: {event.barService}</p>
        <p>Cash Bar Start Time: {event.cashBarStartTime}</p>
        <p>Cash Bar End Time: {event.cashBarEndTime}</p>
        <p>Open Bar Start Time: {event.openBarStartTime}</p>
        <p>Open Bar End Time: {event.openBarEndTime}</p>
        <p>Furniture Style: {event.furnitureStyle}</p>
        <p>Table Style: {event.tableStyle}</p>
        <p>Music Options: {event.musicOptions}</p>
        <p>Flower Arrangement Options: {event.flowerArrangement}</p>
        <p>Entertainment Options: {event.entertainmentOptions}</p>
        <div>
          <Button
            className="EditButton"
            variant="secondary"
            action
            href={`/events/${event.id}/edit`}
          >
            Edit Event
          </Button>
        </div>

        <Form action={`/events/${event.id}?_method=DELETE`} method="POST">
          <Button className="DeleteButton" variant="danger">
            Delete
          </Button>
        </Form>
      </main>
      <footer>
        <p>Plan with us!</p>
      </footer>
    </div>
  );
}
