import React from "react";

function MainPage() {
  return (
    <>
      <h1 class="header1">The Secret Realm</h1>
      <h2 class="header2">Journey into Kaos</h2>
      <body>
        <div class="gamebox">
          <div class="torches">
            <img src="torch.gif" />
          </div>
          <div class="outerbox">
            <div class="leftbox">
              <div class="inventory-controls">
                <h3 class="header2">Controls</h3>
              </div>
              <ul class="controlstext">
                <li>
                  <span class="green">Go</span> - Moves your character one
                  square.
                </li>
                <li>
                  <span class="orange">Look</span> - Take a closer look at an
                  item.
                </li>
                <li>
                  <span class="orange">Get</span> - Pick up an item.
                </li>
                <li>
                  <span class="red">Use</span> - Use an item.
                </li>
              </ul>
            </div>

            <div class="centreboxes">
              <div class="topbox">
                <p class="textp">
                  Welcome to The Secret Realm: Journey into Kaos. You, the hero,
                  will embark on an epic journey and uncover lost secrets and
                  amazing artifacts. Can you master the arts to tackle the
                  challenges ahead? Your journey awaits.
                </p>
                <a href="mainForest.html" class="button">
                  Enter the Realm
                </a>
              </div>
              <div class="bottombox"></div>
            </div>

            <div class="rightbox">
              <div class="inventory-controls">
                <h3 class="header2">Inventory</h3>
              </div>
            </div>
          </div>
          <div class="torches">
            <img src="torch.gif" />
          </div>
        </div>
      </body>
      <script src="game.js"></script>
    </>
  );
}
