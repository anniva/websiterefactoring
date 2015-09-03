app.controller('MainController', ['$scope', function($scope){
  var headers = ["Web Developer","Bachelor's degree in Marketing & PR" , "Background from Accounting & Bokkeeping",  "Vast experience from event technology", "Sailing, Cycling & Bouldering <3"];
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


/*  $scope.plusOne = function(index){
 $scope.products[index].likes += 1; 
  };


app.controller('MainController', ['$scope', function($scope){
  var headers = ['My Life as a koditontyötönmamu', 'Ex roadie', 'Web Developer', 'Funny as hell', 'Organizer of SWS'];
  $scope.title = headers[0];
  $scope.ChangeTitle = function(){
    $scope.title=headers[+1];
    //console.log(this);
    //$scope.qualifications = false;

    $scope.ChangeTitleMinus=function(){
    console.log('t');
    $scope.title=headers[-1];    
  };
  };
}]);


  var headers = [
    {text:'My Life as a koditontyötönmamu', show: true},
    {text:'Ex roadie', show: false},
    {text:'Web Developer', show: false},
    {text:'Funny as hell',show: false},
    {text:'Organizer of SWS',show: false}
    ];

  */