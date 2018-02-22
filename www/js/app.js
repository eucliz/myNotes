
(function() {
  'use strict';

    var app = angular.module('starter', ['ionic']);

    app.config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider.state('list', {
        url: '/list',
        templateUrl: '/components/list/list.html'
      });
      $stateProvider.state('edit', {
        url: '/edit/:id',
        controller: 'EditCtrl',
        templateUrl: '/components/edit/edit.html'
      });
      $stateProvider.state('create', {
        url: '/create',
        controller: 'CreateCtrl',
        templateUrl: '/components/edit/edit.html'
      });
      $urlRouterProvider.otherwise('/list')
    })

    app.run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

}());
