
//SigIn Controller
app.controller('signInCtrl',function($scope,$location){
  
    //function signin
    $scope.login = function(userlog,passlog) {
     
        console.log('Log In Clicked');
        


    }
    
    
    
    //function signup
    $scope.signUp = function(){

          console.log("Sign Up Page Loaded");
          $location.path('/signUp');
      
    };
  
  
    //function register 
    $scope.register = function(user,pass){
        
        console.log('Register Clicked');
        
            


      
      
    } ;
  
  
});
