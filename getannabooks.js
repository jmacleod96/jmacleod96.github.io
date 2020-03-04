$("document").ready(function() {

 $.ajax({
	url: 'https://www.goodreads.com/review/list/11465889.xml?key=s0JsLuTDaZxAxCCWKFzA&v=2&read_at=2020',
	dataType: 'xml',
	success: function(data) {
	var txt = "";
	var booksdata = data;
	var name1 = booksdata.getElementsByTagName('title').length;
	document.getElementById("annabooksread").innerHTML = "Books read: " + name1 + "<br>" ;

    var numpages = booksdata.getElementsByTagName('num_pages');
	
 console.log(numpages)
	
	

	
	
	
	var name = booksdata.getElementsByTagName('title');
	for (i = 0 ; i <name.length; i++) {
        txt += name[i].childNodes[0].nodeValue + "<br>";
    }
	document.getElementById("annabookshere").innerHTML = txt;
	console.log(booksdata);
	},
	error: function(data) {
	console.log('Error loading XML data');
	}
 })
})