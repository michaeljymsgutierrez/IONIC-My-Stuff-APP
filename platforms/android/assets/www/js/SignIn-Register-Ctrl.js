
//SigIn Controller
app.controller('signInCtrl',function($scope,$location,$cordovaSQLite){
  
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
        console.log("Username: "+ user + " *** Password: "+pass);

        
     
       
  

     //Save Query
            var query ="INSERT INTO user_tb (uname,upass) VALUES (?,?)";
            $cordovaSQLite.execute(db,query,[user,pass]).then(function(result){
                console.log(result.rows.item(0).uname);
                
            },function(error){
                console.log(error);
            });
            
 


      
      
    } ;
  
  
});
