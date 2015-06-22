/**
 * Created by zenmind on 2015-06-21.
 */
angular.module("ch16App", [])
    .controller("viewCtrl", function($scope){
        $scope.viewChapterList = ['first','second'];
        $scope.viewChapter = {};
        $scope.viewChapter.mode = $scope.viewChapterList[0];

        $scope.viewHTML = function() {
            var retFile;
            switch($scope.viewChapter.mode) {
                case $scope.viewChapterList[0]:
                    retFile = "02.ch16_first.html";
                    break;
                case $scope.viewChapterList[1]:
                    retFile = "03.ch16_second.html";
                    break;
                default :
                    retFile = "02.ch16_first.html";
                    break
            }
            return retFile;
        };
    });