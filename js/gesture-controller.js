;'use strict';

angular.module('gestureApp.gestureController', ['underscore'])

/*
 * Controller for gestures
 *
 * Depends on underscore: http://lodash.com/
 */
.controller('gestureController', ['$scope', '_',
  function($scope, _) {
    /**
     * Setup page.
     */
    $scope.initialize = function() {
        $scope.collectionInformation = {};
        $scope.collectionInformation.list = [
            {id: 1, name:"Ghostbusters", url:"http://www.emoticonswallpapers.com/avatar/games/Ghostbusters-2.gif"},
            {id: 2, name:"SSX", url:"http://a.psblogstatics.com/wp-content/uploads/avatars/avatar_395946.jpg?m=1327688931"},
            {id: 3, name:"NBA JAM", url:"http://screenshot.it.sftcdn.net/it/scrn/3344000/3344013/nba-jam-07-100x100.png"}
        ];
    };

    $scope.addItem = function(item) {
        $scope.collectionInformation.list.push(_.clone(item));
        item.name = "";
        item.url = "";
    };

    $scope.toggleSelected = function(item){
        if (item.selected) {
            item.selected = false;
        } else {
            item.selected = true;
        }
    };

    $scope.selectItem = function(item) {
      item.selected = true;
    };
}]);

