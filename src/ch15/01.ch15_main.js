/**
 * Created by zenmind on 2015-06-20.
 */
angular.module("ch15App", [])
    .controller("viewCtrl", function($scope){
        $scope.viewChapterList = ['first','second'];
        $scope.viewChapter = {};
        $scope.viewChapter.mode = $scope.viewChapterList[0];

        $scope.viewHTML = function() {
            var retFile;
            console.log("viewHTML " +$scope.viewChapter.mode);
            switch($scope.viewChapter.mode) {
                case $scope.viewChapterList[0]:
                    retFile = "02.ch15_first.html";
                    break;
                case $scope.viewChapterList[1]:
                    retFile = "03.ch15_second.html";
                    break;
                default :
                    retFile = "02.ch15_second.html";
                    break
            }
            return retFile;
        };
    });