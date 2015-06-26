/**
 * Created by zennote on 15. 6. 26.
 */

var app = angular.module("ch17App");

app.controller("defaultCtrl", function($scope){
  $scope.dataSource = "controller";
});

app.directive("panel", function(){
  return {
    link: function(scope, element, attrs) {
      scope.dataSource = "directive";
    },
    restrict: "E",
    scope: true,
    template: function() {
      return angular.element(
        document.querySelector("#template") ).html();
    },
    transclude: true
  }
});