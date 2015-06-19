/**
 * Created by zenmind on 2015-06-19.
 */
angular.module("ch13App")
    .controller("ch13Ctrl", function($scope) {
        $scope.cities = ['London', 'New York', 'Seoul'];
        $scope.city = "Seoul";
        $scope.getCountry = function() {
            switch($scope.city){
                case "London":
                    return 'UK';
                case "Seoul":
                    return "KOR";
                case "New York":
                    return "USA";
            }
        };
    })
    .controller("ch13_5Ctrl", function($scope, ZipCodes){
        // 이벤트 수신 모듈
        $scope.$on("zipCodeUpdated", function(event, args) {
            $scope[args.type] = args.zipCode;
        });
        $scope.setAddress = function(type, zip) {
            /* scope간에 통신하는 이벤트 송신 모듈
             $rootScope.$broadcast("zipCodeUpdated", {
             type: type, zipCode: zip
             }); */
            // 서비스를 활용한 스코프간 이벤트 중개
            ZipCodes.setZipCode(type, zip);
        };
        $scope.copyAddress = function() {
            $scope.zip = $scope.billingZip;
        };
    })
    .service("ZipCodes", function($rootScope) {
        return {
            setZipCode: function(type, zip) {
                this[type] = zip;
                $rootScope.$broadcast("zipCodeUpdated", {
                    type: type, zipCode: zip
                });
            }
        }
    });