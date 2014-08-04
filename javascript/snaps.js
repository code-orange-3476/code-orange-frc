//Checks for andorid browser older versions( <4.4) and prompts browser switch if this is the case; otherwise display correctly.
var nua = navigator.userAgent;
var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
function getAndroidVersion(ua) {
	var match = nua.match(/Android\s([0-9\.]*)/);
	return match ? match[1] : false;
};


if (is_android && parseFloat(getAndroidVersion()) < 4.4){
	$('#title-bar').css('height', 'auto').html('<span>Code Orange 3476</span><br><p>Hi, unfortunately it looks like the browser you are using is a bit old :(<br><br>Please try switching to either of the following browsers for this site to function correctly: <ul><li><p style="padding:0;margin:0;"><a href="https://play.google.com/store/apps/details?id=com.android.chrome&hl=en"> Chrome</a> (a newer version of this same browser) </p></li><li><p style="padding:0;margin:0;"> <a href="https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en">Firefox</a> (a great alternative for older phones)</p></li> </ul><p> Thanks!</p>');
}
else {
	var snapper = new Snap({
		element: document.getElementById('content'),
		disable: 'left',
	});
	var addEvent = function addEvent(element, eventName, func) {
		if (element.addEventListener) {
			return element.addEventListener(eventName, func, false);
		} else if (element.attachEvent) {
			return element.attachEvent("on" + eventName, func);
		}
	};
	document.getElementById('title-bar').addEventListener('click', function(){
	
		if( snapper.state().state=="right" ){
			snapper.close();
		} else {
			snapper.open('right');
		}
	
	});
	/**/
	var classname = document.getElementsByClassName("nav-li");
		for(var i=0;i<classname.length-1;i++){
		  classname[i].addEventListener('click', function(){snapper.close();}, false);
	}
	/**/
	addEvent(document.getElementById('content'), 'click', function(){
		if( snapper.state().state=="right" ){
			snapper.close();
		} 	
	});
	/* Prevent Safari opening links when viewing as a Mobile App */
	(function (a, b, c) {
		if(c in b && b[c]) {
			var d, e = a.location,
				f = /^(a|html)$/i;
			a.addEventListener("click", function (a) {
				d = a.target;
				while(!f.test(d.nodeName)) d = d.parentNode;
				"href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
			}, !1)
		}
	})(document, window.navigator, "standalone");
}