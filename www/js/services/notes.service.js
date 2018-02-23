(function () {
  'use strict';

  var app = angular.module('starter');

  app.factory('NotesService', function ($http, $q) {

    var notes = angular.fromJson(window.localStorage['notes'] || '[]');
    var baseUrl = "https://api-notes-euclidehostienda.c9users.io/";

    function persist() {
      window.localStorage['notes'] = angular.toJson(notes);
    }

    function handleSuccess(res) {
      return res.data;
    }

    function handleError(error) {
      return function () {
        return { success: false, message: error };
      };
    }

    return {

      getNotes: function () {
        return $http.get(baseUrl + 'api/notes')
          .then(handleSuccess, handleError('Error getting all notes'));
      },

      getNoteById: function (id) {
        return $http.get(baseUrl + 'api/note/' + id)
          .then(handleSuccess, handleError('Error getting note'));
      },

      updateNote: function (note) {
        return $http.put(baseUrl + 'api/note/' + note._id, note)
          .then(handleSuccess, handleError('Error update note'));
      },

      removeNote: function (id) {
        return $http.delete(baseUrl + 'api/note/' + id)
          .then(handleSuccess, handleError('Error deleting note'));
      },

      createNote: function (note) {
        return $http.post(baseUrl + 'api/note', note)
          .then(handleSuccess, handleError('Error creating note'));
      }
    }

  });

})();
