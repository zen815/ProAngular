/**
 * Created by zenmind on 2015-06-21.
 */
angular.module("ch16App")
    .controller("ch16FirstCtrl", function($scope) {
        $scope.products = [
            { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
            { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
            { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
        ];
    })
    .directive("unorderedList", function () {
        return {
            link: function (scope, element, attrs) {
                var data = scope[attrs["unorderedList"] || attrs["listSource"]];
                var propertyExpression = attrs["listProperty"] || "price | currency";
                if (angular.isArray(data)) {
                    var listElem = angular.element("<ul>");
                    if(element[0].nodeName == "#comment") {
                      element.parent().append(listElem);
                    } else {
                        element.append(listElem);
                    }
                    for (var i = 0; i < data.length; i++) {
                        var itemElement = angular.element("<li>")
                            .text(scope.$eval(propertyExpression, data[i]));
                        listElem.append(itemElement);
                    }
                }
            },
            restrict: "EACM"
        }
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
            templateUrl:"itemTemplate_ch16-9.html"
        }
    });
