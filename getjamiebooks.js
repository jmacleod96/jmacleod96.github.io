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

	
	//$(booksdata).find("review").each(function()
//{
	//var myTotal = 0;
   //$(this).find("num_pages").each(function()
   //{
	
     //mytotal = myTotal  + Number($(this).text());     
	 
   //})
	//document.getElementById("jamiepagesread").innerHTML = "Pages read: " + mytotal + "<br>" ;
//})
	var total =  0;
            for(var i=0;i<num_pages.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
			 document.getElementById("jamiepagesread").innerHTML = "Pages read: " + total + "<br>" ;
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