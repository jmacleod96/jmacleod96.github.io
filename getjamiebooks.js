$("document").ready(function() {

 $.ajax({
	url: 'https://www.goodreads.com/review/list/72827801.xml?key=s0JsLuTDaZxAxCCWKFzA&v=2&shelf=read&per_page=200&page=1',
	dataType: 'xml',
	success: function(data) {
	var txt = "";
	var booksdata = data;
	var name1 = booksdata.getElementsByTagName('title').length;
	document.getElementById("jamiebooksread").innerHTML = "Jamie has read " + name1 + " books so far!" + "<br>";
	var name = booksdata.getElementsByTagName('title');
	
	var pages1 = booksdata.getElementsByTagName('num_pages');
	//document.getElementById("jamiepagesread").innerHTML = "Pages read so far:" + pages1 + "<br>"; 
	
	$(booksdata).find("review").each(function()
{
   $(this).find("num_pages").each(function()
   {
   $("jamiepagesread").append(Number($(this).text()));
   })

})
	
	
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