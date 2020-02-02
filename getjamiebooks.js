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

	
	$(this).find("num_pages").each(function()
   {
	 var mytotal = 0;
     mytotal = mytotal  + Number($(this).text());     
	 document.getElementById("annapagesread").innerHTML = "Pages read: " + mytotal + "<br>" ;
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