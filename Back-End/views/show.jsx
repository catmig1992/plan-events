const React = require("react");
const Default = require("./Default");

function Show({ florals}) {
  // Confirm we are getting our bread data in the terminal.
  // console.log(bread.name)
  return (
    <Default>
      <h3>{florals.name}</h3>
      <p>
        and it is
        {florals.inSeason ? <span> does </span> : <span> is NOT </span>}
        in season.
      </p>
      <img src={florals.image} alt={florals.name} />
      <p>{bread.getBakedBy()}</p>
      <a href={`/florals/${bread.id}/edit`}>
        <button>Edit</button>
      </a>
      <form action={`florals/${florals.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
      <li>
        <a href="/florals">Go home</a>
      </li>
    </Default>
  );
}

module.exports = Show;