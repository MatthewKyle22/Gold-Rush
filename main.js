angular.module("goldRush", []);

angular.module('goldRush')
   .controller('troller', ["$scope", findGold]);
      function findGold($scope) {
   //array stores a list of marker objects
         $scope.markers =[];
   //boolean hopefully to help with note div
         $scope.writeNote = false;
   
   //Function places marker on map
   $scope.drop = function(event) {
     $scope.marker = {
        x : event.pageX,
        y : event.pageY,
        note : "",
        showNote: false
      };
   //marker gets pushed to the marker array
   $scope.markers.push($scope.marker);
    };
   //removes marker from array & map
   $scope.removeMarker = function(index) {
      $scope.markers.splice(index,1)
    }
}
