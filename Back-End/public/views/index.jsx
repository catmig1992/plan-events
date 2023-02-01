const React = require('react')
const Default = require('./layouts/Default')

function Index({ clientInfo, florals,furniture,music, title }) {
  return (
    <Default title={title}>
      <h2>Build Your Event</h2>
      {/* <p>I have {breads[0].name} bread!</p> */}
      {/* This is a JSX comment. */}
      <h3>Client Info</h3>
      <ul>
        {clientInfo.map((clientInfo) => {
          return (
            <li key={clientInfo.id}>
              <a href={`/clientInfo/${clientInfo.id}`}>{clientInfo.name}</a>
            </li>
          );
        })}
      </ul>

      <h3>Florals</h3>
      <ul>
        {florals.map((florals) => {
          return (
            <li key={florals.id}>
              <a href={`/florals/${florals.id}`}>{florals.name}</a>
            </li>
          );
        })}
      </ul>

      <h3>Furniture</h3>
      <ul>
        {furniture.map((furniture) => {
          return (
            <li key={furniture.id}>
              <a href={`/furniture/${furniture.id}`}>{furniture.name}</a>
            </li>
          );
        })}
      </ul>

      <h3>Music</h3>
      <ul>
        {music.map((music) => {
          return (
            <li key={music.id}>
              <a href={`/music/${music.id}`}>{music.name}</a>
            </li>
          );
        })}
      </ul>


      {/* <h3>Breads</h3> */}
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