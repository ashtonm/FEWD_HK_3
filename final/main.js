// Comments wuth '//!'' show the pseudo code//
// Object with feeds. Each item in the object has the category as a key, and an array of feed urls as value.
// N.B. The last item in both arrays and objects is not followed by a comma.
var feeds = {
    	"news" : [
			"http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=abc.net.au%2Fnews%2Ffeed%2F51120%2Frss.xml&key=1645&hash=9b7e283680a7fea70cee30f29ed76dc16b359e37&max=7&links=remove",
			"http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=abc.net.au%2Fnews%2Ffeed%2F51120%2Frss.xml&key=1645&hash=9b7e283680a7fea70cee30f29ed76dc16b359e37&max=7&links=remove"
		],
		"sport" : [],
		"interests" : []
	}

$.getJSON( feeds.news[0], function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

//RSS feed display on page // 
// 1. RSS feed contents (article header, description, rss feed owner/link) are displayed in html tags
// 2. RSS feeds sorted randomly // 


// RSS feed time taken insertion // 
// 1. RSS feed scans <body> of each article & counts words
// 2. Reading time is then calculated based on number of words in <body>
// 3. Reading time (in minutes) is then inserted in class=timetaken


//When button is clicked

//Button click
//1/ Button for class="time" and/or "feed" is clicked
//2/ RSS feeds are sorted based on combination of buttons clicked on (more than 1 button can be clicked on)
//3/ RSS feeds are sorted based on button click
//*4/ To reset buttons are unchecked

//- RSS feed click on 
//1/ "article header" or "rss feed owner" is clicked on 
//2/ Link is opened up in new page


//RSS feeds // 

//NEWS
//http://qz.com/feed - Quartz
//http://rss.cnn.com/rss/edition.rss - CNN
//http://abc.net.au/news/feed/51120/rss.xml  - ABC just in
//http://feeds.reuters.com/reuters/topNews


//sport
//http://feeds.reuters.com/reuters/sportsNews - reuters sport
//http://www.espncricinfo.com/rss/content/story/feeds/0.xml
//http://feeds.theage.com.au/rssheadlines/sport.xml


//interest
//http://news.nationalgeographic.com/index.rss
//http://feeds.mashable.com/Mashable?format=xml
//http://www.fastcompany.com/rss.xml
//http://www.nationalgeographic.com/adventure/nga.xml




