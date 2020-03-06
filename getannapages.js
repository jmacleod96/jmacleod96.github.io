$("document").ready(function() {

 $.ajax({
	url: 'https://www.goodreads.com/review/list/11465889.xml?key=s0JsLuTDaZxAxCCWKFzA&v=2&read_at=2020',
	dataType: 'xml',
	success: function(data) {
	var txt = "";
	var booksdata = data;
		
	
	var numpages = booksdata.getElementsByTagName('num_pages')[i].innerHTML;
	for (i = 0 ; i <numpages.length; i++) {
        txt += numpages + "<br>";
    }
	document.getElementById("annapageshere").innerHTML = txt;
	console.log(numpages);
	},
	error: function(data) {
	console.log('Error loading XML data');
	}
 })
})