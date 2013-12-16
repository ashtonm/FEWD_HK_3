// Comments wuth '//!'' show the pseudo code//
// Object with feeds. Each item in the object has the category as a key, and an array of feed urls as value.
// N.B. The last item in both arrays and objects is not followed by a comma.
$(function(){

	var converter = {
		'nyt' : {
			'title' : '.item > h1',
			'image' : '.item > img:first()',
			'body'  : '.item p > em'
		}
	}

	var feeds = [
		{
			title : 'abc',
			url : "abc.net.au/news/feed/51120/rss.xml",
			hash : "9b7e283680a7fea70cee30f29ed76dc16b359e37",
			category : 'news',
			converter : 'abc',
		},
		{
			title : 'natgeo',
			url : "news.nationalgeographic.com/index.rss",
			hash : "9e16907d3e0cde5170017fe41b4b5ceddcd4aab7",
			category : 'interest',
			converter : 'natgeo',
		},
	]

	var articles = []
	var articleStore = {}

	function initialise(){
		loadArticles(feeds, processFeeds);
	}

	function loadArticles(arr, callback){
    	$(arr).each(function(i, val){
	        $.ajax({
	            url: fiveFilters(val),
	            async: true,
	            success: function(result,status,jqXHR){ callback(result,status,jqXHR,val)}
	        });
    	})
	}

	function processFeeds(result,status,jqXHR,feed){
		var obj = {};
		obj[feed.title] = result;
		articles.push(obj);
		if (feeds.length == articles.length){
			parseFeeds();
		}
	}

	function parseFeeds(){}

	function parseArticles(){}

	// function getArticles(categories, articles){
		// for (var i = 0; i < categories.length; i++) {
		// 	for (var j = 0; j < feeds[categories[i]].length; j++) {
		// 		$.get(feeds[categories[i]][j], function(data){
		// 			console.log(data.status);
		// 			resultCounter++;
		// 			var xmlDoc = $.parseXML( data );
		// 			var $xml = $( xmlDoc );
		// 			console.log($xml);
		// 			// var result = $xml.find('item');
		// 			console.log(articles[categories[i]])
		// 			if (!Array.isArray(articles[categories[i]])){
		// 				articles[categories[i]] = [];
		// 			}
		// 			articles[categories[i]].push($xml);
		// 		});
		// 	};
		// };
	// }


	// function buildArticle(result){
	// 	console.log(result)
	// 	var res = $(result);
	// 	console.log(res)
	// 	var node = "";
	// 	node += '<article class="contentbox" id="clearfix">';
	// 	node += '<h2>' + result.find('title').text() + '</h2>';
	// 	node += '<p>' + result.find('title').text() + '</p>';
	// 	node += '</article>';
	// 	return node;
	// }

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

	function fiveFilters(feed){
		var base = "http://ftr-premium.fivefilters.org/makefulltextfeed.php";
		var url = encodeURIComponent(feed.url);
		var key = '1645';
		var hash = feed.hash;
		var limit = '7';
		var linkOptions = 'remove';
		var url = base + "?url=" + url + "&key=" + key + "&hash=" + hash + "&max=" + limit + "&links=" + linkOptions;
		return url;
	}

	initialise();

})

