$("document").ready(function() {

 $.ajax({
	url: 'https://www.goodreads.com/review/list/72827801.xml?key=s0JsLuTDaZxAxCCWKFzA&v=2&read_at=2020',
	dataType: 'xml',
	success: function(data) {
	var txt = "";
	var booksdata = data;
	var name1 = booksdata.getElementsByTagName('title').length;
	document.getElementById("jamiebooksread").innerHTML = "Books read: " + name1 + "<br>";
	var name = booksdata.getElementsByTagName('title');
	
	//var numpages = booksdata.getElementsByTagName('num_pages');
	//document.getElementById("jamiepagesread").innerHTML = "Pages read: " + numpages + "<br>";
	
	var numpages = document.getElementsByClassName("num_pages");
	for (var i = 0; i < numpages.length; i++) {
    console.log(numpages[i].id); //second console output
}

	
	
	for (i = 0 ; i <name.length; i++) {
        txt += name[i].childNodes[0].nodeValue + "<br>";
    }
	document.getElementById("jamiebookshere").innerHTML = txt;
	console.log(booksdata);
	},
	
	error: function(data) {
	console.log('Error loading XML data');
	}
 })
})