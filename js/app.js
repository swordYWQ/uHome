// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

    .state('login', {
      url: '/login',
      templateUrl: 'view/login.html',
      controller: 'loginCtrl'
    })

    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'view/main.html',
      controller: 'mainCtrl'
    })

    .state('main.home', {
      url: '/home',
      views:{
        'main':{
            templateUrl: 'view/home.html',
            controller: 'homeCtrl'
        }
      }
    })

    .state('main.room1', {
      url: '/main/room1',
      views:{
        'main':{
          templateUrl: 'view/home/room1.html',
          controller: 'room1Ctrl'
        }
      }
    })

     .state('main.room2', {
      url: '/main/room2',
      views:{
        'main':{
          templateUrl: 'view/home/room2.html',
          controller: 'room2Ctrl'
        }
      }
    })

 .state('main.room3', {
      url: '/main/room3',
      views:{
        'main':{
          templateUrl: 'view/home/room3.html',
          controller: 'room3Ctrl'
        }
      }
    })

 .state('main.room4', {
      url: '/main/room4',
      views:{
        'main':{
          templateUrl: 'view/home/room4.html',
          controller: 'room4Ctrl'
        }
      }
    })
 .state('main.room5', {
      url: '/main/room5',
      views:{
        'main':{
          templateUrl: 'view/home/room5.html',
          controller: 'room5Ctrl'
        }
      }
    })
 .state('main.room6', {
      url: '/main/room6',
      views:{
        'main':{
          templateUrl: 'view/home/room6.html',
          controller: 'room6Ctrl'
        }
      }
    })


    .state('main.society', {
      url: '/society',
      views:{
        'main':{
          templateUrl: 'view/society.html',
          controller: 'societyCtrl'
        }
      }
    })

    .state('main.life', {
      url: '/life',
      views:{
        'main':{
          templateUrl: 'view/life.html',
          controller: 'lifeCtrl'
        }
      }

    })

    .state('main.neighbor', {
      url: '/neighbor',
      views:{
        'main':{
          templateUrl: 'view/neighbor.html',
          controller: 'neighborCtrl'
        }
      }
    })
    // .state('main.room', {
    //   url: '/room',
    //   views:{
    //     'room':{
    //       templateUrl: 'view/room1.html',
    //       controller: 'roomCtrl'
    //     }
    //   }
    // })
  ;


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
