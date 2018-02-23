(function() {
  'use strict';

  var app = angular.module('myNotes');

  app.controller('ListCtrl', function ($scope, $rootScope, NotesService) {

    loadNotes();

    $scope.remove = function (id) {
      NotesService.removeNote(id).then(
        function (response) {
          console.log(response);
          loadNotes();
        }
      );
    }

    $rootScope.$on('$stateChangeSuccess', function() {
      loadNotes();
    })

    function loadNotes() {
      $scope.notes = [];
      NotesService.getNotes().then(
        function (response) {
          if (response.success) {
            $scope.notes = [];
            for(var ind in response.message) {
              $scope.notes.push(response.message[ind]);
            }
          } else {
            console.log(response.message);
          }
        }
      );
    }

  });

}());
