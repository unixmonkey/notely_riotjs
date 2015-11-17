(function () {
  'use strict';

  window.Actions = {

    fetchNotes: function() {
      return $.ajax({
        url: CONSTANTS.API_BASE + 'notes',
        method: 'GET',
        headers: { 'Authorization': AuthToken.get() }
      })
    },

    authenticateUser: function(username, password) {
      var credentials = {
        user: {
          username: username,
          password: password
        }
      }
      return $.ajax({
        url: CONSTANTS.API_BASE + 'sessions',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(credentials)
      })
    },

    createUser: function(userData) {
      return $.ajax({
        url: CONSTANTS.API_BASE + 'users',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ user: userData })
      })
    }

  }

})();
