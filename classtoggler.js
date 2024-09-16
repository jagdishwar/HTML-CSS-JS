<html>
 <head>
   <title>Element.classList Exercise</title>
 </head>
 <body>
  <div class="imgContainer">
		<img src="/udata/MLE2D8Lzv6X/route66.jpg">
  </div>
 </body>
</html>


var img = document.querySelector('img');

img.onclick = function(){
  this.classList.toggle('invisible');
}

img {
  opacity: 1;
  width: 100%;
  transition: opacity 1s ease;
}

.invisible {
  opacity: 0; 
}

.imgContainer {
  width: 50%;
	margin: 20px auto;
  border: 1px solid black;
}
