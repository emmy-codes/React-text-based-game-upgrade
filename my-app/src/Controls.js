import React from "react"

function Controls() {
    return (
      <>
        <div className="leftbox">
          <div className="inventory-controls">
            <h3 className="header2">Controls</h3>
          </div>

          <ul className="controlstext">
            <li>
              <span className="green">Go</span> - Moves your character one
              square.
            </li>
            <li>
              <span className="orange">Look</span> - Take a closer look at an
              item.
            </li>
            <li>
              <span className="orange">Get</span> - Pick up an item.
            </li>
            <li>
              <span className="red">Use</span> - Use an item.
            </li>
          </ul>
        </div>
      </>
    );
}

export default Controls