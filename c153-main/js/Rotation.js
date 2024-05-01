//Diver rotation component
AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //get the data from the attributes
      this.data.speedOfRoation = this.el.getAttribute("rotation");      
      this.data.speedOfAscent = this.el.getAttribute("position");

      var diverRotation = this.data.speedOfRoation;      
      var diverPosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (diverRotation.x < 10) {
          diverRotation.x += 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (diverRotation.x > -10) {
          diverRotation.x -= 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (diverRotation.z < 20) {
          diverRotation.z += 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.y < 2) {
          diverPosition.y += 0.01;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (diverRotation.z > -10) {
          diverRotation.z -= 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.y > -2) {
          diverPosition.y -= 0.01;
          this.el.setAttribute("position", diverPosition);
        }
      }
    });
  }
});


AFRAME.registerComponent("coins", {
  init: function(){
    for(var i=1; i <= 10; i++){
      const id = `coin$(i)`

      var posX =(Math.random() * 100 + (-50));      
      var posY = (Math.random() * 5 + 5);
      var posZ = (Math.random() * 60 + (-40));

      var position = { x: posX, y: posY, z: posZ };
      this.createCoins(id, position)
    }
  },

  createCoins: function (id, position) {
    const treasureEntity = document.querySelector("#treasureCoins")
    var coinEl = document.createElement("a-entity")

    coinEl.setAttribute("id", id)
    coinEl.setAttribute("position", position)
    coinEl.setAttribute("material", "color", "#ff9100")

    coinEl.setAttribute("geometry", {primitive: "circle", radius:1})

    coinEl.setAttribute("animation", {
      property:"rotation",
      to: "0 360 0", 
      loop: "true",
      dur: "1000"
    })

    treasureEntity.appendChild(coinEl)
}
})