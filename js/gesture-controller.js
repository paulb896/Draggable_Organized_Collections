;'use strict';

angular.module('gestureApp.gestureController', [])

/*
 * Controller for gestures
 *
 * Depends on underscore: http://lodash.com/
 */
.controller('gestureController', ['$scope',
  function($scope, _) {
    /**
     * Setup page.
     */
    $scope.initialize = function() {

        var collection = [
            {id: 1, name:"Ghostbusters", url:"http://www.emoticonswallpapers.com/avatar/games/Ghostbusters-2.gif"},
            {id: 2, name:"SSX", url:"http://a.psblogstatics.com/wp-content/uploads/avatars/avatar_395946.jpg?m=1327688931"},
            {id: 3, name:"NBA JAM", url:"http://screenshot.it.sftcdn.net/it/scrn/3344000/3344013/nba-jam-07-100x100.png"}
        ];

        $scope.collectionInformation = {};
        $scope.collectionInformation.list = collection;
        $scope.type = "Nothing yet";
    };

    $scope.addItem = function(item) {
        $scope.collectionInformation.list.push(_.cloneDeep(item));
        item.name = "";
        item.url = "";
    };

    $scope.selectItem = function(item) {
      item.selected = true;
    };
}]);