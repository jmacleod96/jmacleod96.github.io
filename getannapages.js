$("document").ready(function() {

 $.ajax({
	url: 'https://www.goodreads.com/review/list/11465889.xml?key=s0JsLuTDaZxAxCCWKFzA&v=2&read_at=2020',
	dataType: 'xml',
	success: function(data) {
	var txt = "";
	var booksdata = data;
	
	// var lol = booksdata.getElementsByTagName('num_pages');
	// console.log(lol);
	
	// var name = booksdata.getElementsByTagName('num_pages');
	// for (i = 0 ; i <name.length; i++) {
        // txt += name[i].childNodes[0].textContent + "<br>";
    // }
	var name = booksdata.getElementsByTagName('num_pages');
	for (i = 0 ; i <name.length; i++) {
        txt += name[i].childNodes[0].text + "<br>";
    }
	document.getElementById("annapagesread").innerHTML = txt;
	console.log(txt);
	},
	
	error: function(data) {
	console.log('Error loading XML data');
	}
 })
})