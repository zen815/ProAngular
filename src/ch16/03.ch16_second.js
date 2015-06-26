/**
 * Created by zennote on 15. 6. 25.
 */
angular.module("ch16App")
  .controller("ch16SecondCtrl", function($scope) {
    $scope.products = [
      { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
      { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
      { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
    ];
  })
  // 16-7 template
  .directive("useTemplate", function(){
    return {
      link: function(scope, element, attrs) {
        scope.data = scope[attrs["useTemplate"]];
      },
      restrict: "A",
      template: "<ul><li ng-repeat='item in data'>" + "{{item.price | currency}}</li></ul>"
    }
  })
  // 16-8 use function()
  .directive("useTemplate2", function(){
    return {
      link: function(scope, element, attrs) {
        scope.data = scope[attrs["useTemplate2"]];
      },
      restrict: "A",
      template: function() {
        return angular.element(document.querySelector("#listTemplate")).html();
      }
    }
  })
  .directive("useTemplate3", function(){
    return {
      link: function(scope, element, attrs) {
        scope.data = scope[attrs["useTemplate3"]];
      },
      restrict: "A",
      templateUrl:  "itemTemplate_ch16-9.html"
    }
  })
  .directive("useTemplate33", function(){
    return {
      link: function(scope, element, attrs) {
        scope.data = scope[attrs["useTemplate33"]];
      },
      restrict: "A",
      templateUrl:  "tableTemplate_ch16-12.html",
      replace: true
    }
  })
  .directive("useTemplate4", function(){
    return {
      link: function(scope, element, attrs) {
        scope.data = scope[attrs["useTemplate4"]];
      },
      restrict: "A",
      templateUrl: function (element, attrs) {
        console.log(attrs["template"]);
        return attrs["template"] == "table" ?
          "tableTemplate_ch16-12.html" : "itemTemplate_ch16-9.html";
      }
    }
  });