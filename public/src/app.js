(function () {
  'use strict';

  var currentTag = null

  var routes = {
    default: function() {
      mount('notely')
    },

    notes: function() {
      mount('notes')
    },

    'sign-up': function() {
      mount('sign-up')
    },

    'sign-in': function(id, action) {
      mount('sign-in')
    },

    stooges: function() {
      mount('stooges', {
        stooges: [
          { name: 'Jim' },
          { name: 'Varney' }
        ]
      })
    }
  }

  function mount(tag, options) {
    currentTag && currentTag.unmount(true)
    currentTag = riot.mount('app', tag, options)[0]
  }

  var routeHandler = function(collection, id, action) {
    var routeStr = [collection, id, action].join('/')
    console.log('routing ', routeStr)
    var handler = routes[collection || 'default']
    if (handler) {
      handler(id, action)
    } else {
      console.log('no route found')
    }
  }

  riot.route(routeHandler)
  riot.route.start(routeHandler);

}());
