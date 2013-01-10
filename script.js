(function() {
  var App = {};

  App.init = function(){
    //you have to change the following line for production
    App.socket = io.connect('http://localhost:9000');

    App.socket.on('message', function(data){
      return App.draw(data);
    });

    App.draw = function(text){
      $('#stream').prepend(text);
    }
  };

  $(function() {
    return App.init();
  });
}).call(this);
