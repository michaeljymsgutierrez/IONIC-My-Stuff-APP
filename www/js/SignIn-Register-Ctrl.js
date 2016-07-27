
//SigIn Controller
app.controller('signInCtrl',function($scope,$location,$firebaseAuth){
  
    //function signin
    $scope.login = function(userlog,passlog) {
     
        console.log('Log In Clicked');
        console.log("User: "+userlog+" Pass: "+passlog);
        
      
        
        var ref = new Firebase("https://mystuff-d12d5.firebaseio.com/");
        ref.authWithPassword({
        email    : userlog,
        password : passlog
        }, function(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
        }
        });  
        
        
        
        
              
        /*
        var fbAuth = $firebaseAuth(fb);
        fbAuth.$authWithPassword({
            email: username,
            password: password
        }).then(function(authData) {
            $location.path("/todo");
        }).catch(function(error) {
            console.error("ERROR: " + error);
        });
        */
      
    }
    
    
    
    //function signup
    $scope.signUp = function(){

          console.log("Sign Up Page Loaded");
          $location.path('/signUp');
      
    };
  
  
    //function register 
    $scope.register = function(user,pass){
        
        console.log('Register Clicked');
        
            
            console.log("User: "+user+"  Pass: "+pass);
            var ref = new Firebase('https://mystuff-d12d5.firebaseio.com/');
            ref.createUser({
            email    : user,
            password : pass
            }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
            });
                    
        /*        
        var fbAuth = $firebaseAuth(fb);
        
        fbAuth.$createUser({
             email: username, 
             password: password
        }).then(function() {
            return fbAuth.$authWithPassword({
                email: username,
                password: password
            });
        }).then(function(authData) {
            $location.path('/signIn')
        }).catch(function(error) {
            console.error("ERROR " + error);
        });
        */
      
      
    } ;
  
  
});