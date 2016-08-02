
//SigIn Controller
app.controller('signInCtrl',function($scope,$location,$cordovaSQLite,$ionicPopup,$timeout){
  
    //Signin Function ****************************************************************
    $scope.login = function(userlog,passlog) {
     
        console.log('Log In Clicked');
        console.log(userlog);
        
        var logQuery = "SELECT id FROM user_table WHERE uname = ?  and upass = ? , LIMIT 1";
        
        $cordovaSQLite.execute(db,logQuery,[userlog,passlog]).then(function(result){
            
            console.log("Success Login");
                
        },function(error){
            
            console.log("Failed Login");
        
        });

        
    }
    
    
    
    //Signup Function ****************************************************************
    $scope.signUp = function(){

          console.log("Sign Up Page Loaded");
          $location.path('/signUp');
      
    };
  
  
  
  
  
    //Register Function **************************************************************
    $scope.register = function(user,pass){
        
            console.log('Register Clicked');
            console.log("Username: "+ user + " *** Password: "+pass);

            //SQLite Save Query
            var regQuery ="INSERT INTO user_table (uname,upass) VALUES (?,?)";
            $cordovaSQLite.execute(db,regQuery,[user,pass]).then(function(result){
                
                console.log(result.insertId);
                $scope.myAlert = $ionicPopup.alert({
                        title:'Notification',
                        template :'Account successfully created </br> Thank You'                        
                })
                
                if($scope.myAlert){
                   
                   $timeout(function(){
                        $location.path('/signIn');
                   },5000);
                   
                    
                }else{
                    
                    $ionicPopup({
                        title: 'Notification',
                        template: 'Failed to create account'
                    });
                }
                
                
            },function(error){
                
                console.log(error);
            
            });
 
    };
    
    
    
  
  
});
