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
    });
