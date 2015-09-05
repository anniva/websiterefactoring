app.controller('MainController', ['$scope', function($scope){
  var headers = ["Web Developer","Bachelor's degree in Marketing & PR", "Background from Accounting & Bokkeeping",  "Experience from event technology", "Sailing, Cycling & Bouldering <3"];
  var show = 0;
  $scope.title = headers[show];

  $scope.ChangeTitlePlus = function(){
    if(show===4){show=0;}else{show+=1;}
    $scope.title = headers[show];
  };

  $scope.ChangeTitleMinus=function(){
    if(show ===0){show=4;}else{show-=1;}
    $scope.title = headers[show];
  };

 $scope.title = headers[show];

}]);
