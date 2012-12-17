//Add qunit divs
$('body').append('<div id="qunit"></div><div id="qunit-fixture"></div>');
//Add Qunit and jquery ui css
$('head').append('<link rel="stylesheet" href="http://code.jquery.com/qunit/qunit-git.css" type="text/css" />');
$('head').append('<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />');
//Style qunit div : non 100% width and z-index to 32bits max int
$('head').append('<style>#qunit { width: 300px; z-index: 2147483647; }</style>');

 
//Get Qunit
$.getScript('http://code.jquery.com/qunit/qunit-git.js').done(function(script, textStatus) {
	//Get jquery UI to get draggable and resizable
	$.getScript('http://code.jquery.com/ui/1.9.2/jquery-ui.js').done (function(script, textStatus) {
		//Init and start (but why ?) 
		QUnit.init();QUnit.start();
		$(function() {
			$( "#qunit" ).draggable().resizable({ handles: "e, w" });;
		});
		
		//Check if known script to run, based on local storage
		if(typeof (localStorage.qunitScript) !== 'undefined') { $.getScript(localStorage.qunitScript); } 
		else { console.log('No script to run, please add one using localStorage.qunitScript = \'scriptURL\' in your debug console. You still can test using qunit test() syntax.'); }
		
	});
});

