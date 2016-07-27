

app.config(function($stateProvider,$urlRouterProvider){
  
  
  $stateProvider
  .state('signIn',{
    
      url: '/signIn',
      controller: 'signInCtrl',
      templateUrl: 'templates/login.html'

  })
  .state('signUp',{
      url: '/signUp',
      controller: 'signInCtrl',
      templateUrl: 'templates/signup.html'
  })
  .state('todo',{
      url: '/todo',
      controller: 'todoCtrl',
      templateUrl: 'templates/todo-tabs.html'
  })
  
  $urlRouterProvider.otherwise('/signIn');
});