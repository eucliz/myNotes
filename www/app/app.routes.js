(function() {
  'use strict';

  angular.module('myNotes')

    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/templates/base.html',
        controller: 'BaseCtrl'
      });

      $stateProvider.state('app.list', {
        url: '/list',
        views: {
          "content@app": {
            templateUrl: 'app/components/list/list.html',
            controller: 'ListCtrl'
          }
        }
      });

      $stateProvider.state('app.edit', {
        url: '/edit/:id',
        views: {
          "content@app": {
            templateUrl: 'app/components/edit/edit.html',
            controller: 'EditCtrl'
          }
        }
      });

      $stateProvider.state('app.create', {
        url: '/create',
        views: {
          "content@app": {
            templateUrl: 'app/components/edit/edit.html',
            controller: 'CreateCtrl'
          }
        }
      });

      $urlRouterProvider.otherwise('/app/list')
    })

}());
