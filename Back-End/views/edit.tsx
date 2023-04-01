import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const React = require("react");
const Default = require("./layout/default");

let floral: any;

function Edit({ floral: floral, floralStyle }) {
  return (
    <Default>
      <h2>Edit a Flower</h2>

      <form action={`/floral/${floral.id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={floral.flower}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={floral.image}
        />

        <label htmlFor="floralStyle">Floral Style</label>
        <select
          name="floral style"
          id="floral style"
          defaultValue={floral.floralStyle}
        >
          {floralStyle.map(
            (floralStyle: {
              type:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }) => {
              return (
                <option value={floral.id} key={floral.id}>
                  {floralStyle.type}
                </option>
              );
            }
          )}
        </select>

        <label htmlFor="inSeason">in Season?</label>
        <input
          type="checkbox"
          name="inSeason"
          id="inSeason"
          defaultChecked={floral.inSeason}
        />
        <br />
        <input type="submit" />
      </form>
    </Default>
  );
}

module.exports = Edit;
