const React = require('react')
const Default = require('./Default')

function New () {
    return (
      <Default>
        <h2>Add A Flower</h2>
        <form action="/florals" method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />

          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
          <label htmlFor="quantity">Quanity</label>
          <input
            type="number"
            name="quanity"
            id="quantity"
            defaultNumber
          />
          <br />
          <input type="submit"/>

          <div className="backButton">
  <a href="/florals"><button>Go back to the DataBase</button></a>
</div>

        </form>
      </Default>
    )
}

module.exports = New
