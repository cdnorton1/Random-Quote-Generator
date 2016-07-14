$(document).ready(function() {

	var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";

	var getQuote = function(json) {
  		$(".message").html('"' + json.quoteText + '"');
  
  		var twitterQuote = 'https://twitter.com/intent/tweet?text=' + json.quoteText + ' - ' + json.quoteAuthor;
  		if (json.quoteAuthor === '') {
    		json.quoteAuthor = 'Unknown';
  		}
  		$(".authorName").html('- ' + json.quoteAuthor);
 		$(".twitterButton").attr("href", twitterQuote);	
	};

  	$.getJSON(url, getQuote);

	$("#getMessage").click(function() {
  		$.getJSON(url, getQuote);
	});

});