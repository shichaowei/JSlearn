(function(){
	var myHeading = document.querySelector('h1');
	for(var i=0;i<10;i++){
		window.setTimeout(t(i), 1000 * i + 1000);
	}
	function t(j){
		return function(){
			myHeading.innerHTML = 'Hello world!'+j;
		}
	}
})();