(function() {
  'use strict';

  var app = angular.module('starter');

  app.controller('EditCtrl', function ($scope, $state, NotesService) {
    $scope.id = $state.params.id;
    $scope.note = null;

    NotesService.getNoteById($scope.id).then(
      function (response) {
        if (response.success) {
          $scope.note = response.message;
        } else {
          console.log(response.message);
        }
      }
    );

    $scope.save = function () {
      NotesService.updateNote($scope.note).then(
        function (response) {
          $state.go('list');
        }
      );
    }
  });

}());
