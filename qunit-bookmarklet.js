var qunitUrl = 'http://code.jquery.com/qunit/qunit-git.js'; 
var jqueryUrl = 'http://code.jquery.com/jquery-latest.js';
var jqueryUiUrl = 'http://code.jquery.com/ui/1.9.2/jquery-ui.js';


function loadScript(url, callback)
{
	var head = document.getElementsByTagName("head")[0];
	var script = document.createElement("script");
	script.src = url;

	// Attach handlers for all browsers
	var done = false;
	script.onload = script.onreadystatechange = function()
	{
		if( !done && ( !this.readyState 
					|| this.readyState == "loaded" 
					|| this.readyState == "complete") )
		{
			done = true;

			// Continue your code
			callback();

			// Handle memory leak in IE
			script.onload = script.onreadystatechange = null;
			head.removeChild( script );
		}
	};

	head.appendChild(script);
}


// Usage: 
// This code loads jQuery and executes some code when jQuery is loaded
// Jquery from Microsoft(r) CDN cause it supports https
loadScript(jqueryUrl, function()
{
	//Add qunit divs
	$('body').append('<div id="qunit"></div><div id="qunit-fixture"></div>');
	//Add Qunit and jquery ui css
	$('head').append('<link rel="stylesheet" href="http://code.jquery.com/qunit/qunit-git.css" type="text/css" />');
	$('head').append('<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />');
	//Style qunit div : non 100% width and z-index to 32bits max int
	$('head').append('<style>#qunit { width: 600px; z-index: 2147483647; position: fixed; top: 0; left: 0;}</style>');

	 
	//Get Qunit
	$.getScript(qunitUrl).done(function(script, textStatus) {
		//Get jquery UI to get draggable and resizable
		$.getScript(jqueryUiUrl).done (function(script, textStatus) {
			//Init and start (but why ?) 
			QUnit.init();QUnit.start();
			$(function() {
				$( "#qunit" ).draggable().resizable({ handles: "e, w" });;
			});
			
			//Check if known script to run, based on local storage
			if(typeof (localStorage.qunitScript) !== 'undefined') { $.getScript(localStorage.qunitScript); } 
			else { console.log("No script to run, please add one using localStorage.qunitScript = 'scriptURL' in your debug console. \n Example : localStorage.qunitScript='https://raw.github.com/jseguillon/qunit-bookmarklet/master/sample.js' \n You still can test using qunit test() syntax."); }
			
		});
	});
});



