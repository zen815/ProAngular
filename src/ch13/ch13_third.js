/**
 * Created by zennote on 15. 6. 19.
 */
$(document).ready(function(){
  $('#jqui button' ).button().click(function(e) {
    angular.element(angularRegion).scope().$apply('handleClick()');
  });
});


angular.module("ch13App")
  .controller("ch13_15Ctrl", function($scope){
    $scope.buttonEnabled = true;
    $scope.clickCounter = 0;

    $scope.handleClick = function() {
      $scope.clickCounter = $scope.clickCounter + 1;
    };

    $scope.$watch('buttonEnabled', function(newValue){
      $('#jqui button').button({
        disabled: !newValue
      });
    });
  });