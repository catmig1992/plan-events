const React = require('react')
const Default = require('./layout/default')

function New ({floralStyle}) {
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

          <label htmlFor="floralStyle">Floral Style</label>
                <select name="floralStyle" id="floralStyle">
                   {floralStyle.map((floralStyle) => {
                return(
                    <option value={floralStyle.id} key={floralStyle.id}>{floralStyle.name}</option>
                )
            })}
            </select>

          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
          <label htmlFor="inSeason">In Season</label>
          <input
            type="checkbox"
            name="inSeason"
            id="inSeason"
            defaultChecked
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
