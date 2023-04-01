import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
} from "react";

const React = require("react");
const Default = require("./layout/default");

function Index({ floral: floral, title }) {
  return (
    <Default title={title}>
      <h2>Vendor DataBase Page</h2>

      {/* <h3>Floral Style</h3>
      <ul>
        {floralStyle.map((floralStyle) => {
          return (
            <li key={floralStyle.id}>
              <a href={`/floral/${floralStyle.id}`}>{floralStyle.name}</a>
            </li>
          );
        })}
      </ul>  */}

      <h3>Florals</h3>
      <div className="newButton">
        <a href="/floral/new">
          <button>Add New Flower</button>
        </a>
      </div>
      <ul>
        {floral.map(
          (
            floral: {
              id: any;
              flower:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            },
            index: Key | null | undefined
          ) => {
            //{console.log(floral)}
            return (
              <li key={index}>
                <a href={`/florals/${floral.id}`}>{floral.flower}</a>
              </li>
            );
          }
        )}
      </ul>
    </Default>
  );
}

module.exports = Index;
