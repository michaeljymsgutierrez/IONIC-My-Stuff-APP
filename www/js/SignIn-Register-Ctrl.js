
//SigIn Controller
app.controller('signInCtrl',function($scope,$location,$cordovaSQLite){
  
    //Signin Function
    $scope.login = function(userlog,passlog) {
     
        console.log('Log In Clicked');
        


    }
    
    
    
    //Signup Function
    $scope.signUp = function(){

          console.log("Sign Up Page Loaded");
          $location.path('/signUp');
      
    };
  
  
    //Register Function
    $scope.register = function(user,pass){
        
            console.log('Register Clicked');
            console.log("Username: "+ user + " *** Password: "+pass);

            //SQLite Save Query
            var query ="INSERT INTO user_tb (uname,upass) VALUES (?,?)";
            $cordovaSQLite.execute(db,query,[user,pass]).then(function(result){
                
                console.log(result.insertId);
                $location.path('/signIn');
                
            },function(error){
                
                console.log(error);
            
            });
 
    };
    
    
    
  
  
});
