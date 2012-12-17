module("default tests");
test( "injected from https://raw.github.com/jseguillon/qunit-bookmarklet/master/sample.js", function() {
		ok( 1 == "1", "Its working" );
		ok( 1 == "1", "Look at your console" );
});

module("features added");
test( "added draggable and sizable", function() {
		ok( 1 == "1", "Now you can move and resize your qunit result bar (horizontal only)" );
});