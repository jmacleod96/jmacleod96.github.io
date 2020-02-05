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

	var numpages = booksdata.getElementsByTagName('num_pages');
	function sumArray(numpages) {
	for (
    var
      pages = 0,              // The iterator
      length = numpages.length,  // Cache the array length
      sum = 0;                // The total amount
      pages < length;         // The "for"-loop condition
      sum += numpages[index++]   // Add number on each iteration
	);
		return sum;
		console.log(sum)
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