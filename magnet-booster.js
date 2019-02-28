// ==UserScript==
// @name     magnet-booster
// @version  1
// @include  http*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @grant    GM.xmlHttpRequest
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);



$(window).load(function(){
  
// xmlHttpRequest caches requests automatically
GM.xmlHttpRequest({ method: "GET", url: "https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt", onload: function(response) { 
  
  console.log("Magnet-Booster: successful request to github"); 

var magnet = "";

response.response.split("\n").forEach(function(entry) {
  if (entry.startsWith("http") || entry.startsWith("udp"))
    magnet += "&tr=" + encodeURIComponent(entry);
});
  
$("a[href^='magnet:']")
   .each(function()
   { 
     this.href = this.href + magnet;
   }).promise().done(function () { 
  		console.log("Magnet-Booster: updated all magnets on page!"); 
});
  


} });

  
 });
