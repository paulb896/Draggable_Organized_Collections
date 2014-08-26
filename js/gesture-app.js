'use strict';
angular.module('underscore', []).factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
});
angular.module('gestureApp', ['gestureApp.gestureController', 'gestureApp.movableDirective']);
