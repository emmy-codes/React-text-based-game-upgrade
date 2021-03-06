import React from "react"

function CottageEast(){
  return(
<>
<body>

<div class="gamebox" id="page5">
<div class="torches">
  <img src="torch.gif" />
</div>
  <div class="outerbox">
    <div class="leftbox">
      <div class="inventory-controls">
      <h3 class="header2">Controls</h3>
    </div>
    <ul class="controlstext">
        <li><span class="green">Go</span> - Moves your character one square.</li>
        <li><span class="orange">Look</span> - Take a closer look at an item.</li>
        <li><span class="yellow">Get</span> - Pick up an item.</li>
        <li><span class="red">Use</span> - Use an item.</li>
      </ul>
    </div>

    <div class="centreboxes">
      <div class="topbox">
        <p class="textp">You follow the dirt path, which eventually leads you to a badly broken picket fence. Stepping over the remains you see a cottage up ahead. 
            Upon approaching the building, you notice that there is a makeshift barricade in front of the door. 
            All of the windows are boarded up but there is one <span class="orange">Window</span> that is partially uncovered. You can exit to the <span class="green">South</span>.
        </p>
        <p class="textp hidden Look">You decide to step up to the window to see if you can get an idea of what is inside. A thick layer of dirt and dust covers the glass, 
          which you gingerly wipe away with one hand. Cupping your hands round your eyes to get a better view, you lean in close to the glass. It all appears dark, dead and still. 
          Something darts suddenly into your field of vision, a furry blur with no distinguishable features. It shoots by the window and out of view. Did it notice you? 
          A low growl emanates from within the building. It seems unwise to try to break in unless you are armed with something to protect yourself from whatever is inside.</p>
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
  <div class="torches">
    <img src="torch.gif" />
  </div>
</div>
</body>
</>
)}