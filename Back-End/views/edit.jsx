const React = require('react')
const Default = require('./layouts/Default')

function Edit ({florals, floralStyle}) {
    return (
      <Default>
        <h2>Edit a Flower</h2>
        
        <form action={`/breads/${florals.id}?_method=PUT`} method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={florals.type}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={florals.image}
          />
              
              <label htmlFor="baker">Floral Style</label>
                  <select name="baker" id="baker" defaultValue={florals.floralStyle}>
                     {bakers.map((baker) => {
                return(
                    <option value={florals.id} key={florals.id}>{floralStyle.type}</option>
                )
            })}
                  </select>


          <label htmlFor="inSeason">in Season?</label>
          <input
            type="checkbox"
            name="inSeason"
            id="inSeason"
            defaultChecked={florals.inSeason}
          />
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}


module.exports = Edit