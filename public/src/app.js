(function () {
  'use strict';

  var currentTag = null

  var routes = {
    default: function(id, action) {
      mount('notely', {
        stooges: [
          { name: 'Jim' },
          { name: 'Varney' }
        ]
      })
    },

    'sign-in': function(id, action) {
      mount('sign-in');
    }
  }

  function mount(tag, options) {
    currentTag && currentTag.unmount(true)
    currentTag = riot.mount('notely', tag, options)[0]
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
