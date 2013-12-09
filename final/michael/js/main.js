// Comments wuth '//!'' show the pseudo code//
// Object with feeds. Each item in the object has the category as a key, and an array of feed urls as value.
// N.B. The last item in both arrays and objects is not followed by a comma.
var categories = ["news", "sport","interests"]

var feeds = {
    	"news" : [
			"http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=abc.net.au%2Fnews%2Ffeed%2F51120%2Frss.xml&key=1645&hash=9b7e283680a7fea70cee30f29ed76dc16b359e37&max=7&links=remove",
			"http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=abc.net.au%2Fnews%2Ffeed%2F51120%2Frss.xml&key=1645&hash=9b7e283680a7fea70cee30f29ed76dc16b359e37&max=7&links=remove"
		],
		"sport" : [
			"http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=abc.net.au%2Fnews%2Ffeed%2F51120%2Frss.xml&key=1645&hash=9b7e283680a7fea70cee30f29ed76dc16b359e37&max=7&links=remove"
		],
		"interests" : [
			"http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=abc.net.au%2Fnews%2Ffeed%2F51120%2Frss.xml&key=1645&hash=9b7e283680a7fea70cee30f29ed76dc16b359e37&max=7&links=remove"
			]
	}

var feedCounter = 0;
var articleCounter = 0;
var loaded = false;

var articles = {
	'news' : [],
	'sport' : [],
	'interests' : []
}

for (var i = categories.length - 1; i >= 0; i--) {
	for (var j = feeds[categories[i]].length - 1; j >= 0; j--) {
		feedCounter++;
		getArticles(categories[i], j);
	};
};


// while(!loaded){
// 	console.log('fire!')
// 	if (feedCounter == articleCounter && articleCounter > 0){
// 		console.log('equal')
// 		loaded = true;
// 		buildArticles()
// 	}
// }

function buildArticles(){
	for (var i = categories.length - 1; i >= 0; i--) {
		for (var j = feeds[categories[i]].length - 1; j >= 0; j--) {
			console.log(articles[categories[i]][j]);
			buildArticle(articles[categories[i]][j]);
		};
	};	
}


function getArticles(category, item){
 $.get(feeds[category][item], function(data){
 	console.log(data.status);
 	articleCounter++;
    var xmlDoc = $.parseXML( data );
    var $xml = $( xmlDoc );
    var result = $xml.find('item');
    articles[category].push(result);
  });
}



function buildArticle(result){
	console.log(result)
	var res = $(result);
	console.log(res)
	var node = "";
	node += '<article class="contentbox" id="clearfix">';
	node += '<h2>' + result.find('title').text() + '</h2>';
	node += '<p>' + result.find('title').text() + '</p>';
	node += '</article>';
	return node;
}

// $('.contentcontainer').append(buildArticle(articles[category][item]))

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
//http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=rss.cnn.com%2Frss%2Fedition.rss&key=1645&hash=faa6c81af97e87003cfee5e097a5aded56f3e27e&max=7&links=remove
//http://abc.net.au/news/feed/51120/rss.xml  - ABC just in
//http://feeds.reuters.com/reuters/topNews
//http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml - NYT
//http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=rss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FHomePage.xml&key=1645&hash=4c018ec3cd2f7ce6163899154f058b607f2b610e&max=7&links=remove



//sport
//http://feeds.reuters.com/reuters/sportsNews - reuters sport ------
//http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=feeds.reuters.com%2Freuters%2FsportsNews.xml&key=1645&hash=a2c7729250611e98227d6f297b92f070e9e46adf&max=7&links=remove
//http://www.espncricinfo.com/rss/content/story/feeds/0.xml -------
//http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=www.espncricinfo.com%2Frss%2Fcontent%2Fstory%2Ffeeds%2F0.xml&key=1645&hash=7b0606fb5de65b122587dfbfc3e51c4df2eda513&max=7&links=remove 
//http://feeds.theage.com.au/rssheadlines/sport.xml -------
//http://ftr-premium.fivefilters.org/makefulltextfeed.php?url=feeds.theage.com.au%2Frssheadlines%2Fsport.xml&key=1645&hash=4a07461b24e471ee4d45d63745ec993316b46dae&max=7&links=remove


//interest
//http://news.nationalgeographic.com/index.rss
//http://feeds.mashable.com/Mashable?format=xml
//http://www.fastcompany.com/rss.xml
//http://www.nationalgeographic.com/adventure/nga.xml




