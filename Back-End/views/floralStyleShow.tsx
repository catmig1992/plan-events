import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const React = require("react");
const Default = require("./layouts/Default");

function Show({ floralStyle }) {
  return (
    <Default>
      <h3>{floralStyle.type}</h3>
      {/* <p>{floralStyle.type} has been baking with us since {baker.startDate.getFullYear()}</p>
          <p>About {baker.name}: {baker.bio}</p>
          <h3>Breads {baker.name} has baked</h3> */}
      <ul>
        {floralStyle.florals.map(
          (floral: {
            id: Key | null | undefined;
            flower_type:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => {
            return <li key={floral.id}>{floral.flower_type}</li>;
          }
        )}
      </ul>
      <form action={`/florals/${floral.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
    </Default>
  );
}

module.exports = Show;
