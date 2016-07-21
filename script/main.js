///click listener in vanilla javascript
//var elem = document.getElementById('my-elem');
//elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
//}, false);
//If you're using jQuery, you'll be adding the "click" event listener with jQuery.click().

var clickCounter = 0;

///click listener in jQuery
$('#catImg').click(function(e) {
	console.log("click");
	clickCounter +=1;
  clickCounterElement.innerHTML = clickCounter + "";
});