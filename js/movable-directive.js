;'use strict';

angular.module('gestureApp.movableDirective', [])
.directive("movable", function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs, ctrl) {
          var movableElement = element[0];
          var hammerElement = new Hammer(movableElement);
          var transformUpdates = {
            translate:{
              x:0, y:0  
            },
            scale:1,
            rotate:0
          };

          function transform(element) {
            var elementTransform = [
              "translate3d("
              + transformUpdates.translate.x
              + "px, " + transformUpdates.translate.y
              + "px, 0)", "scale("
              + transformUpdates.scale
              + ", "
              + transformUpdates.scale
              + ")", "rotate("
              + transformUpdates.rotate + "deg)"
            ];
            element.style.webkitTransform = element.style.transform = elementTransform.join(" ");
          }

          hammerElement.on("dragup", function(event) {
              if (transformUpdates.translate.y > 0) {
                transformUpdates.translate.y -= 4;
              }
              transform(movableElement);
          });
          hammerElement.on("dragdown", function(event) {
              if (transformUpdates.translate.y < 200) {
                transformUpdates.translate.y += 4;
              }
              transform(movableElement);
          });
        }
    }
});

