rest_node
=========


## Server
  To get the Node.JS Server up and running, you have to install Node.JS and NPM(Node Package Manager) first.
  Create a new Directory, copy the server.js File into it and type "npm install socket.io" on the commandline.
  Now you should be able to run the server on the commandline by running the command "node server.js"
  
## Client
  Add the following lines to the head of your views:
  <pre><code>
    \< script src="http://localhost:9000/socket.io/socket.io.js" \> \</script \>
    <script type="text/javascript" src="js/script.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
  </code></pre>
  
  Make sure that your Stream Element contains the id "stream"
  
## Detailed Instructions
  You can find a more detailed description of the setup under the following Blogpost:
  
  [Use Node.JS as a Rest Remote Service](http://blog.wolfgang-vogl.com/?p=589)
