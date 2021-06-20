import React from "react";

function RuinsSouth() {
  return (
    <>
      <div class="gamebox" id="page2" />
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
              <span class="green">Go</span> - Moves your character one square.
            </li>
            <li>
              <span class="orange">Look</span> - Take a closer look at an item.
            </li>
            <li>
              <span class="yellow">Get</span> - Pick up an item.
            </li>
            <li>
              <span class="red">Use</span> - Use an item.
            </li>
          </ul>
        </div>

        <div class="centreboxes">
          <div class="topbox">
            <p class="textp">
              Taking the cobbled path leads you to what looks like an open field
              at first glance, but then you realise the stumps on the ground
              where the wooden posts would have been. Beyond this lays the
              charred remains of what must have been a barn, judging by the
              nearby husk of a burnt out tractor. Upon closer inspection you
              spot a jar of <span class="orange">Peaches</span>, a{" "}
              <span class="orange">Bucket</span>, and a{" "}
              <span class="orange">Shovel</span>. You can exit to the{" "}
              <span class="green">North</span>.
            </p>
            <p class="textp hidden Look">
              You kneel down and turn the tin around to check the label. It has
              a good date on it and can easily be saved for later. Lucky for you
              it has a ring pull lid so you won't need anything special to open
              it with.
            </p>
            <p class="textp hidden Look">
              You stoop down to take a look at the bucket. It appears in
              relatively good shape, has few dents in it and no rusting. To your
              dismay there is a hole close to the bottom; it looks as though
              someone intentionally sabotaged it to be unusable.
            </p>

            <p class="textp hidden Look">
              You glance down at the shovel. It has been struck into the soil,
              presumably to keep it standing once someone was finished with it.
              It looks like they never came back to finish the job. The handle
              seems well used, but otherwise whole.
            </p>

            <p class="textp hidden Get">
              You scoop up the tin of peaches and tuck it away in your backpack,
              feeling rather pleased with yourself.
            </p>

            <p class="textp hidden Get">
              Shrugging, you decide that the bucket is worth taking despite the
              damage. Perhaps it can be fixed or otherwise be made useful later
              on.
            </p>

            <p class="textp hidden Get">
              You casually hoist the shovel over your shoulder and into your
              backpack. You never know when it might come in handy.
            </p>
          </div>
          <div class="bottombox">
            <form class="form">
              <input type="text" class="input" />
              <button type="submit">Enter</button>
            </form>
          </div>
        </div>

        <div class="rightbox">
          <div class="inventory-controls">
            <h3 class="header2">Inventory</h3>
          </div>
        </div>
      </div>
      <div class="torches" />
      <img src="torch.gif" />
    </>
  );
};
