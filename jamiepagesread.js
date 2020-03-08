$("document").ready(function() {

 $.ajax({
	url: 'https://www.goodreads.com/review/list/72827801.xml?key=s0JsLuTDaZxAxCCWKFzA&v=2&read_at=2020',
	dataType: 'xml',
	success: function(data) {
	var txt = "";
	var booksdata = data;
	
	// var lol = booksdata.getElementsByTagName('num_pages');
	// console.log(lol);
	
	// var name = booksdata.getElementsByTagName('num_pages');
	// for (i = 0 ; i <name.length; i++) {
        // txt += name[i].childNodes[0].textContent + "<br>";
    // 
	
	
	var pages = booksdata.getElementsByTagName('num_pages');
	console.log(pages);
	
	var arr = Array.prototype.slice.call(pages)
	console.log(arr);
	//document.getElementById("jamiepagesread").innerHTML = "Jamie has read " + arr.innerHTML + " pages so far!" + "<br>";



	}
 }) 
})