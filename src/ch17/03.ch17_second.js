/**
 * Created by zenmind on 2015-06-28.
 */

var app = angular.module("ch17App");
// ex. 17-2
app.controller("secondCtrl", function($scope) {
    $scope.products = [
        { name: "Apples", price: 1.20 },
        { name: "Bananas", price: 2.42 },
        { name: "Pears", price: 2.02 }
    ];
    $scope.changeData = function () {
        $scope.products.push({ name: "Cherries", price: 4.02 });
        for (var i = 0; i < $scope.products.length; i++) {
            $scope.products[i].price++;
        }
    }
});

app.directive("simpleRepeater", function() {
    return {
        scope: {
            data: "=source",
            propName: "@itemName"
        },
        transclude: 'element',
        compile: function (element, attrs, transcludeFn) {
            return function ($scope, $element, $attr) {
                $scope.$watch("data.length", function () {
                    var parent = $element.parent();
                    parent.children().remove();
                    // for (var i = 0; i < $scope.data.length; i++) {
                    for (var i = 0; i < 3; i++) {
                        var childScope = $scope.$new();
                        childScope[$scope.propName] = $scope.data[i];
                        transcludeFn(childScope, function (clone) {
                            parent.append(clone);
                        });
                    }
                });
            }
        }
    }
});

// ex 17-3 using controllers in Directives
app.directive("productItem", function(){
    return {
        template: document.querySelector("#productTemplate").outerText,
        require: "^productTable",
        link: function (scope, element, attrs, ctrl) {
            scope.$watch("item.quantity", function () {
                ctrl.updateTotal();
            });
        }
    }
});

app.directive("productTable", function(){
    return {
        transclude: true,
        scope: { value: "=productTable", data: "=productData"},
        controller: function ($scope, $element, $attrs) {
        this.updateTotal = function() {
            var total = 0;
            for (var i = 0; i < $scope.data.length; i++) {
                total += Number($scope.data[i].quantity);
            }
            $scope.value = total;
        }
    }
    }
});