(function() {
  'use strict';

  var app = angular.module('starter');

  app.controller('CreateCtrl', function ($scope, $state, NotesService) {
    $scope.note = {created_at: new Date().getTime(), title: '', description: ''}

    $scope.save = function () {
      NotesService.createNote($scope.note).then(
        function (response) {
          console.log(response);
          $state.go('list');
        }
      );
    }

  });

}());
