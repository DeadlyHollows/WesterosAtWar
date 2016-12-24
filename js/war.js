var app = angular.module('options', []);

function open() {
	$('.navs').show("slow").fadeIn("slow");
}

function close() {
	$('.navs').hide(200);
}

$(document).click(function() {
	close();
});

$(".no-nav").click(function(e) {
    open();
    e.stopPropagation(); // This is the preferred method.
    return false;        // This should not be used unless you do not want
                         // any click events registering inside the div
});