searchsteemlink();
function searchsteemlink() {
	var searchString = "[Steem:Link]" // Suchwort auslesen

  var result = document.getElementById('pageContent').innerHTML.match(searchString); // in pageContent nach dem Suchwort suchen
	var result = document.getElementById(result).innerHTML;
  var FistIndex = result.lastIndexOf(searchString);
	result = result.substr(FistIndex+searchString.length+1, result.length);
	LastIndex = result.indexOf(")");

	result = result.substr(0, LastIndex);

	FirstIndex = result.lastIndexOf("@");
	LastIndex = result.lastIndexOf("/");
	var permlink = result.substr(LastIndex+1, result.length);
	var author = result.substr(FirstIndex+1, LastIndex-FirstIndex-1);

	//console.log(FirstIndex);
	//console.log(LastIndex);
	//console.log(result);
	//console.log(author);
	//console.log(permlink);
return([author, permlink])
}

function steemgetvote(author, permlink) {
		var author = "janisplayer"
		var permlink = "das-einfache-geld-mit-bots"
		steem.api.getActiveVotes(author, permlink, function(err, result) {
		document.getElementById("votes").innerHTML = "Votes: " + result.length;
		});
}

function steemvote(author, permlink) {

var author = "janisplayer"
var permlink = "das-einfache-geld-mit-bots"
var user = "janisplayer"
var weight = 10000
var voter = "janisplayer"
var password = ""

var wif = steem.auth.toWif(user, password, 'posting');
steem.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
console.log(err, result);
});
}
