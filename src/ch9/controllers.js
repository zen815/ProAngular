/**
 * Created by zennote on 15. 6. 12.
 */

var controllersModule = angular.module("exampleApp.Controllers", []);

controllersModule.controller("dayCtrl", function($scope, days) {
    $scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function($scope, days) {
    $scope.day = days.tomorrow;
});