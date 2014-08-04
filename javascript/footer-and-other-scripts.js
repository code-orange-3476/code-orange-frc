//Adds the cool orange scrollbar to the main page and the menu drawer on desktop
$(window).load(function() {
	if ($(window).width() > 1223){
	$("#menu-drawer").niceScroll({cursoropacitymax:"0.8",cursorcolor:"#e69e32",zindex:"1", cursorborderradius:"15px", cursorborder:"4px solid rgba(0,0,0,0)", cursorwidth:"7px"});
	$("#content").niceScroll({cursoropacitymax:"0.8",cursorcolor:"#e69e32",zindex:"99", cursorborderradius:"15px", cursorborder:"4px solid rgba(0,0,0,0)", cursorwidth:"7px"});
}});

//Implements match-height to keep all cards in one single row the same height on all except phones, excluding the home page with the section-thirds (only section-thirds requires match-height on phones)
 $(function() {
	 if ($(".section-third").length > 0){
	 	$('.row').each(function() {
			 $(this).children().matchHeight(byRow);
			 $(this).children().children().matchHeight(byRow);
		 });
	 }
	 else if ($(window).width() > 767){
		 var byRow = $(".row").length > 0;
		 $('.row').each(function() {
			 $(this).children().matchHeight(byRow);
			 $(this).children().children().matchHeight(byRow);
		 });
	 }
	 
 });

//Reloads the page when window is resized/orientation changed to reset the display of many things, except for tutorial channel pages which don't need it (when videos are full screened it may cause it to unintendedly change).
//After much hacking this seems to work decently for all browsers I tested: chrome desktop/mobile, safari desktop, firefox desktop, IE desktop(10) . Need test: aosp android, ios safari, other mobile browsers maybe. 
//Known problem: doesnt reload when resizing on desktop between window widths less than 1224. More of a minor edge case, no good solution available.

var portrait = false;
var landscape = false;
var first = 0;
var test = window.matchMedia("(orientation: portrait)");

if (test.matches){
	portrait = true;
}
else {
	landscape = true;
}
$(window).resize(function(){
	if ($("#video-frame").length == 0){
		if ($(window).width() < 1224){
			test.addListener(function(m) {
			  if(m.matches) {
				// Changed to portrait
				portrait = true;
				if (landscape){
					setTimeout(function(){location.reload()}, 100);
				}
			  } else {
				// Changed to landscape
				landscape = true;
				if (portrait){
					setTimeout(function(){location.reload()}, 100);
				}
			  }
			})
		}
		else {
			//if window.width >= 1224
			setTimeout(function(){location.reload()}, 100);
		}
	}
});



//Sets youtube video heights
if ($(".row").length > 0){
	$('.video').css('height', $('.section2').width()*0.555);
} 
else {
	$('.video').css('height', $('.column-left').width()*0.555);
}

//Sets header height
if ($(window).width() > 910){
	$('#header').css('height', 240);
}
else {
	$('#header').css('height', $(window).width() * 196 / 910 + 44);
}
//header height for tutorial channel pages
$(window).resize(function(){
	if ($(window).width() > 910){
	$('#header').css('height', 240);
}
else {
	$('#header').css('height', $(window).width() * 196 / 910 + 44);
}
});

/*Footer Uncompressed*
Modify,
www.textfixer.com/tools/remove-line-breaks.php
and paste. 

$('#content').append("

	<div id='footer'>
		<div id='footer-content'>
		<span>&copy; Copyright 2011-2014 Code Orange 3476. All rights reserved.</span>
		<span style='float:right;'><a href='about-website.html'>About the Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='contact-us.html'>Contact Us</a>
				</span>
		</div>
	</div>
	
");
*/
//footer compressed version
$('#content').append("<div id='footer'><div id='footer-content'><span>&copy;2014 Code Orange 3476, Some rights reserved. </span><span style='float:right;'><a href='about-website.html'>About the Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='contact-us.html'>Contact Us</a></span></div></div>");
