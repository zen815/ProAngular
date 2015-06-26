/**
 * Created by zennote on 15. 6. 26.
 */
var app = angular.module("ch16App");
app.controller("ch16ThirdCtrl", function($scope) {
  $scope.data = { name: "Adam" };
  $scope.city = "London";
});

app.directive("scopeDemo", function() {
  return {
    template: function() {
      return angular.element(
        document.querySelector("#scopeTemplate")).html();
    },
    // scope: true
    scope: {}
  }
});

app.directive("scopeDemo2", function() {
  return {
    template: function() {
      return angular.element(
        document.querySelector("#scopeTemplate2")).html();
    },
    scope: {
      local: "@nameprop"
    }
  }
});