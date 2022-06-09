
//var author
//var permlink
//var results

getinfo();

function getinfo() {
//  chrome.tabs.executeScript(null, {code:"alert("afs");"});
chrome.tabs.executeScript( null, {code:"var x = searchsteemlink(); x "},// "var x = [53,71]; x "
function(results){
results = results[0];
author = results[0];
permlink = results[1];
//alert (results[1]);
//return results
});
}

//function steemgetvote(author,permlink) {
function steemgetvote() {
    document.getElementById("votes").innerHTML = "Votes: Load";
    getinfo();
    //baresults = getinfo();
    //author = results[0];
  	//permlink = results[1];
		steem.api.getActiveVotes(author, permlink, function(err, result) {
		document.getElementById("votes").innerHTML = "Votes: " + result.length;
	});
}

function steemvote() {
getinfo();

var password = document.getElementById("password_text").value;
var username = document.getElementById("username_text").value;

//var author = "janisplayer"
//var permlink = "das-einfache-geld-mit-bots"
//var username = "janisplayer"

var weight = 10000

//var password = ""

var voter = username;

var wif = steem.auth.toWif(username, password, 'posting');
steem.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {alert(err);});

steemgetvote();
}

/*function save_password(data){
chrome.storage.sync.set({'myLine': value}, function() {
  alert("Success!");
};
}*/

document.addEventListener('DOMContentLoaded', () => {
document.getElementById("titel").innerHTML = "Titel: " + "Load";
document.getElementById("comments").innerHTML = "Comments: " + "Load";
document.getElementById("views").innerHTML = "Views: " + "Load";


document.getElementById('Vote').addEventListener('click', steemvote);
document.getElementById('Vote_Reload').addEventListener('click', steemgetvote);
//steemgetvote();
});
