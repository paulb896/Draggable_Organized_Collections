var hammerMovableElement = {
  transformUpdates:{
    translate:{
      x:0, y:0  
    },
    scale:1,
    rotate:0
  },
  maxX: 200,
  maxY: 300,
  transform: function(element) {
    var elementTransform = [
      "translate3d("
      + hammerMovableElement.transformUpdates.translate.x
      + "px, " + hammerMovableElement.transformUpdates.translate.y
      + "px, 0)", "scale("
      + hammerMovableElement.transformUpdates.scale
      + ", "
      + hammerMovableElement.transformUpdates.scale
      + ")", "rotate("
      + hammerMovableElement.transformUpdates.rotate + "deg)"
    ];
    element.style.webkitTransform = element.style.transform = elementTransform.join(" ");
  },
  init: function() {
    var myElement = document.getElementById('myElement');
    var hammerElement = new Hammer(myElement);
    hammerElement.on("dragup", function(event) {
      if (hammerMovableElement.transformUpdates.translate.y > 1) {
        hammerMovableElement.transformUpdates.translate.y -= 4.5;
      }
      hammerMovableElement.transform(myElement);
    });
    hammerElement.on("dragright", function(event) {
      if (hammerMovableElement.transformUpdates.translate.x < hammerMovableElement.maxX) {
        hammerMovableElement.transformUpdates.translate.x += 4.5;
      }
      hammerMovableElement.transform(myElement);
    });
    hammerElement.on("dragdown", function(event) {
      myElement.textContent = event.type + " gesture detected.";
      if (hammerMovableElement.transformUpdates.translate.y < hammerMovableElement.maxY) {
        hammerMovableElement.transformUpdates.translate.y += 4.5;
      }
      hammerMovableElement.transform(myElement);
    });
    hammerElement.on("dragleft", function(event) {
      if (hammerMovableElement.transformUpdates.translate.x > 1) {
        hammerMovableElement.transformUpdates.translate.x -= 4.5;
      }
      hammerMovableElement.transform(myElement);
    });
  }
}

hammerMovableElement.init();
