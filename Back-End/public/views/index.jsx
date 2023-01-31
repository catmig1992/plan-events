const React = require('react')
const Default = require('./layouts/Default')

function Index({ breads, bakers, title }) {
  return (
    <Default title={title}>
      <h2>Build Your Event</h2>
      {/* <p>I have {breads[0].name} bread!</p> */}
      {/* This is a JSX comment. */}
      <h3>Bakers</h3>
      <ul>
        {bakers.map((baker) => {
          return (
            <li key={baker.id}>
              <a href={`/bakers/${baker.id}`}>{baker.name}</a>
            </li>
          );
        })}
      </ul>
      <h3>Breads</h3>
      <div className="newButton">
        <a href="/breads/new">
          <button>Add a new bread</button>
        </a>
      </div>
      <ul>
        {breads.map((bread, index) => {
          return (
            <li key={index}>
              <a href={`/breads/${bread.id}`}>{bread.name}</a>
            </li>
          );
        })}
      </ul>
    </Default>
  );
}

module.exports = Index;