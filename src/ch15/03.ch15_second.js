/**
 * Created by zenmind on 2015-06-21.
 */
angular.module("ch15App")
    .directive("demoDirective", function () {
        return function (scope, element, attrs) {
            var items = element.find("li");
            items.css("color", "red");
            for (var i = 0; i < items.length; i++) {
                if (items.eq(i).text() == "Oranges") {
                    items.eq(i).css("font-weight", "bold");
                } else {
                    items.eq(i).css("font-weight", "normal");
                }
            }
            console.log("Element count: " + items.length);
            console.log("Font: " + items.css("font-weight"));
        }
    })
    .directive("createDirective", function() {
        return function(scope,element,attrs) {
            // var listElem = element.append("<ol>");
            var listElem = angular.element("<ol>");
            element.append(listElem);
            for (var i = 0; i < scope.names.length; i++) {
                // listElem.append("<li>").append("<span>").text(scope.names[i]);
                listElem.append(angular.element("<li>")
                    .append(angular.element("<span>").text(scope.names[i])));
            }
            var buttons = element.find("button");
            buttons.on("click", function(e){
                element.find("li").toggleClass("bold");
            });
        }
    })
    .controller("ch15SecondCtrl", function($scope){
        $scope.names = ["Apples", "Bananas", "Oranges"];
    });