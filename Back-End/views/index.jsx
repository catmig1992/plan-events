const React = require('react')
const Default = require('./layouts/Default')

function Index({ catering, bakers, title }) {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      {/* <p>I have {breads[0].name} bread!</p> */}
      {/* This is a JSX comment. */}
      <h3>Catering</h3>
      <ul>
        {catering.map((catering) => {
          return (
            <li key={catering.id}>
              <a href={`/catering/${catering.id}`}>{catering.name}</a>
            </li>
          );
        })}
      </ul>
      {/* <h3>Breads</h3>
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
      </ul> */}
    </Default>
  );
}

module.exports = Index;