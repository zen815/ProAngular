/**
 * Created by zenmind on 2015-06-20.
 */
angular.module("ch15App")
    .controller("ch15FirstCtrl", function($scope){
        $scope.products = [
            { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
            { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
            { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
        ];

        $scope.incrementPrices = function() {
            for(var i=0; i < $scope.products.length; i++) {
                $scope.products[i].price++;
            }
        }
    })
    .directive("unorderedList", function () {
        return function (scope, element, attrs) {
            var data = scope[attrs["unorderedList"]];
            var propertyExpression  = attrs["listProperty"];
            if (angular.isArray(data)) {
                var listElem = angular.element("<ul>");
                element.append(listElem);
                for (var i = 0; i < data.length; i++) {
                    // listElem.append(angular.element('<li>').text(data[i].name));
                    // listElem.append(angular.element('<li>').text(data[i][propertyName]));
                    // listElem.append(angular.element('<li>').text(scope.$eval(propertyExpression,data[i])));
                     /* problem javascript closure
                    var itemElement = angular.element('<li>');
                    listElem.append(itemElement);
                    var watcherFn = function (watchScope) {
                        return watchScope.$eval(propertyExpression, data[i]);
                    }
                    scope.$watch(watcherFn, function (newValue, oldValue) {
                        itemElement.text(newValue);
                    });
                    */
                    (function () {
                        var itemElement = angular.element('<li>');
                        listElem.append(itemElement);
                        var index = i;
                        var watcherFn = function (watchScope) {
                            return watchScope.$eval(propertyExpression, data[index]);
                        }
                        scope.$watch(watcherFn, function (newValue, oldValue) {
                            itemElement.text(newValue);
                        });
                    }());
                }
            }
        };
    })
    .directive("jqueryList", function(){
        return function (scope, element, attrs) {
            var data = scope[attrs["jqueryList"]];
            var propertyExpression = attrs["listProperty"];
            if (angular.isArray(data)) {
                var listElem = angular.element("<ul>").appendTo(element);
                for (var i = 0; i < data.length; i++) {
                    (function () {
                        var itemElement =
                            angular.element("<li>").appendTo(listElem);
                        var index = i;
                        var watcherFn = function (watchScope) {
                            return watchScope.$eval(propertyExpression,
                                data[index]);
                        }
                        scope.$watch(watcherFn, function (newValue, oldValue) {
                            itemElement.text(newValue);
                        });
                    }());
                }
            }
        }
    });