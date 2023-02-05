const React = require('react')
const Default = require('./layouts/Default')

function Show ({floralStyle}) {
    return (
      <Default>
          <h3>{floralStyle.type}</h3>
          {/* <p>{floralStyle.type} has been baking with us since {baker.startDate.getFullYear()}</p>
          <p>About {baker.name}: {baker.bio}</p>
          <h3>Breads {baker.name} has baked</h3> */}
                    <ul>
                        {floralStyle.florals.map((florals)=> {
                                return (
                                    <li key={florals.id}>
                                        {florals.flower_type}
                                    </li>
                                )
                            })
                        }
                    </ul>
            <form action={`/florals/${florals.id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
            </form>

      </Default>
    )
}

module.exports = Show
