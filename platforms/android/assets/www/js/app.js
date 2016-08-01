// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngCordova'])
 
var db = null;
app.run(function($ionicPlatform,$cordovaSQLite) {
  $ionicPlatform.ready(function() {
    

    
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
      
      
    }
    
    
    // SQLite
    
        try {
          
            db = $cordovaSQLite.openDB({name:"mystuff_db",location:'default'});
            console.log('Sucessful openDB');  

        } catch (error) {
        
             console.log('Error openDB');
        }
        
        
        
        
        try{
          
            $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS user_tb (id INTEGER PRIMARY KEY AUTOINCREMENT, uname TEXT, upass TEXT )');
            console.log('Sucessful Create Table')
        
        }catch(error){
        
            console.log('Error executeDb');
        
        }
      


    

  });
})











