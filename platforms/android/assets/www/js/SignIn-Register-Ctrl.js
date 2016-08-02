
//SigIn Controller
app.controller('signInCtrl',function($scope,$location,$cordovaSQLite,$ionicPopup,$timeout){
  
    //Signin Function ****************************************************************
    $scope.login = function(userlog,passlog) {
     
        console.log('Log In Clicked');
        
        var query = "SELECT uname ,upass FROM user_table WHERE uname = ? and upass = ?, LIMIT 0";
        
        $cordovaSQLite.execute(db,query,[userlog, passlog]).then(function(result){
       
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
            var query ="INSERT INTO user_table (uname,upass) VALUES (?,?)";
            $cordovaSQLite.execute(db,query,[user,pass]).then(function(result){
                
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
