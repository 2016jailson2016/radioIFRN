angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.mural', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/mural.html',
        controller: 'muralCtrl'
      }
    }
  })

  .state('tabsController.chat', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tabsController.quemSomos', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/quemSomos.html',
        controller: 'quemSomosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastreSe', {
    url: '/page7',
    templateUrl: 'templates/cadastreSe.html',
    controller: 'cadastreSeCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});