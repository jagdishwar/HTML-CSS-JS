<html>
  <head>
    <title>Exercise: DOM manipulations using onclick event listener</title>
  </head>
  <body>
    <button type="button">Click Me!</button>
  </body>
</html>


var button = document.querySelector('button');

button.onmouseenter = function(){
  this.innerHTML = "Mouse entered!";
}

button.onmouseleave = function(){
  this.innerHTML = "Mouse left!";
}

button.ondblclick = function(){
  this.innerHTML = "Double clicked!!";
}
