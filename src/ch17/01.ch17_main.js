/**
 * Created by zennote on 15. 6. 26.
 */
var app = angular.module("ch17App", []);

app.controller("viewCtrl", function($scope){
  $scope.viewChapterList = ['first'];
  $scope.viewChapter = {};
  $scope.viewChapter.mode = $scope.viewChapterList[0];

  $scope.viewHTML = function() {
    var retFile;
    switch($scope.viewChapter.mode) {
      case $scope.viewChapterList[0]:
        retFile = "02.ch17_first.html";
        break;
      /*
      case $scope.viewChapterList[1]:
        retFile = "03.ch17_second.html";
        break;
        */
      default :
        retFile = "02.ch17_first.html";
        break
    }
    return retFile;
  };
});