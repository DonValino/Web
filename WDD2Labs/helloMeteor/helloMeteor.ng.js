// Client Only code// Defines Angulare Module and controller// Loads the angular-meteor moduleif (Meteor.isClient) {    angular.module('hello', ['angular-meteor'])        .controller('hmCtrl', function ($scope, $meteor) {            // Read the meteor collection defined in server.js            $scope.counter = $meteor.collection(Counter);            // incCounter called by button click in view            $scope.incCounter = function(){                // Call the meteor incrementCounter method on the server side                $meteor.call('incrementCounter').then(                    // Write to log if successful                    function(result){                        console.log('counter incremented');                    }                );            };        });}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
