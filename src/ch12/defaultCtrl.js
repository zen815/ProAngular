/**
 * Created by zenmind on 2015-06-18.
 */
angular.module("exampleApp", [])
    .controller("defaultCtrl", function($scope) {

        $scope.viewChapter={};

        $scope.todos = [
            {id: 100, place: "Store", action: "Get groceries", complete: false},
            {id: 200, place: "Store", action: "Call plumber", complete: false},
            {id: 300, place: "Home", action: "Buy running shoes", complete: true},
            {id: 400, place: "Home", action: "Buy flowers", complete: false},
            {id: 500, place: "Office", action: "Call family", complete: false}
        ];
        // exam 12-3
        $scope.addNewItem = function (newItem) {
            if (angular.isDefined(newItem) && angular.isDefined(newItem.action)
                && angular.isDefined(newItem.location)) { <!-- exam 12-4 newItem의 폼 유효성-->
                $scope.todos.push({
                    action: newItem.action + " (" + newItem.location + ")",
                    complete: false
                });
            }
        };
        // exam 12-5 기본적인 폼 유효성 체크
        $scope.addUser = function(userDetails) {
            console.log("add user: " + userDetails.name + myFrom.$valid);
            if(myForm.$valid) {
                $scope.message = userDetails.name + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
                console.log("generate message: " + $scope.message);
            } else {
                console.log("change validation: ");
                $scope.showValidation  = true;
            }
        };

        $scope.message = "Ready";

        // 12-9 유효성 피드백 통합
        $scope.getError = function(error) {
            if (angular.isDefined( error )) {
                if (error.required) {
                    return "Please enter a value";
                } else if (error.email) {
                    return "Please enter a valid email address";
                }
            }
        };
        // 12-12 input 엘리먼트에 대한 어트리뷰트 활용
        $scope.requireValue = true;
        $scope.matchPattern = new RegExp("^[a-z]");  // enail, url, number는 자동으로 패턴이 설정됨
    });