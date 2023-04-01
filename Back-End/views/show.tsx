const React = require("react");
const Default = require("./layout/default");

function Show({ floral: floral }) {
  return (
    <Default>
      <h3>{floral.flower}</h3>
      <p>
        and it is
        {floral.inSeason ? <span> </span> : <span> is NOT </span>}
        in season.
      </p>
      <img src={floral.image} alt={floral.flower} />
      {/* <p>{bread.getBakedBy()}</p> */}
      <a href={`/florals/${floral.id}/edit`}>
        <button>Edit</button>
      </a>
      <form action={`florals/${floral.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
      <li>
        <a href="/florals">Go Back To The DataBase</a>
      </li>
    </Default>
  );
}

module.exports = Show;
