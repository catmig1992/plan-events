const React = require('react')
const Default = require('./Default')

function Index({ florals, title }) {
  return (
    <Default title={title}>
      <h2>Vendor DataBase Page</h2>
      {/* <p>I have {breads[0].name} bread!</p> */}
      {/* This is a JSX comment. */}
      <h3>Florals</h3>
      <div className="newButton">
        <a href="/florals/new">
          <button>Add New Flower</button>
        </a>
      </div>
      <ul>
        {florals.map((florals, index) => {
          //{console.log(florals)}
          return (
            <li key={index}>
              <a href={`/florals/${florals._id}`}>{florals.floral_type}</a>
            </li>
          );
        })}
      </ul>
    </Default>
  );
}

module.exports = Index;
