/**
 * Created by zenmind on 2015-06-28.
 */

var app = angular.module("ch17App");

app.controller("thirdCtrl", function($scope){
    $scope.dataValue = "Not Sure";
});

app.directive("triButton", function(){
   return {
       restrict: "E",
       replace: true,
       require: "ngModel",
       template: document.querySelector("#triTemplate").outerText,
       link: function(scope, element, attrs, ctrl) {

           var validateParser = function(value) {
               var valid = (value == "Yes" || value == "No");
               ctrl.$setValidity("confidence", valid);
               return valid ? value: undefined;
           }
           ctrl.$parsers.push(validateParser);
           element.on("click", function(event) {
               setSelected(event.target.innerText);
               scope.$apply(function() {
                   ctrl.$setViewValue(event.target.innerText);
               });
           });

           var setSelected = function(value) {
               var buttons = element.find("button");
               buttons.removeClass("btn-primary");
               for(var i=0; i < buttons.length; i++){
                   if(buttons.eq(i).text() == value) {
                       buttons.eq(i).addClass("btn-primary");
                   }
               }
           };

           ctrl.$render = function () {
               setSelected(ctrl.$viewValue || "Not Sure");
           };

           ctrl.$formatters.push(function (value) {
               return value == "Huh?" ? "Not Sure" : value;
           });
       }
   }
});