(function () {
  'use strict';

  var routes = {
    default: function(id, action) {
      riot.mount('notely', {
        stooges: [
          { name: 'Jim' },
          { name: 'Varney' }
        ]
      })
    }
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
