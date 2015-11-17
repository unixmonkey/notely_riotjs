(function () {
  'use strict';

  var data = {
    notes: [],
    currentNote: undefined,
    currentUser: (localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : undefined),
    authToken: (localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : undefined)
  };

  window.CurrentUser = {
    get: function() {
      return data.currentUser
    },

    set: function(user) {
      data.currentUser = user
      localStorage.setItem('currentUser', JSON.stringify(user))
    },

    clear: function() {
      data.currentUser = undefined
      localStorage.removeItem('currentUser')
    },

    isSignedIn: function() {
      return !!(this.get() && this.get()._id)
    }
  };

  window.AuthToken = {
    get: function() {
      return data.authToken
    },

    set: function(token) {
      data.authToken = token
      localStorage.setItem('authToken', token)
    },

    clear: function() {
      data.authToken = undefined
      localStorage.removeItem('authToken')
    }
  }

})();
