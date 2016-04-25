var app = angular.module('autocompleteApp', ['ngMaterial']);
app.controller('DemoCtrl', function($scope, $mdBottomSheet) {
  $scope.openBottomSheet = function() {
    $mdBottomSheet.show({
      template: '<md-bottom-sheet>Hello!</md-bottom-sheet>'
    });
  };
});
