// put your code here

(function($){
	$(document).ready(function(){
		/* code to run when widget is loaded */

		// enable scrolling on window class
		$(".window").mCustomScrollbar();

		// tell AppleWidget class that content is ready for viewing
		// ref: http://hype.desk.com/customer/portal/articles/620251-remove-the-white-flash-when-loading-an-html-widget-in-ibooks
		widget.notifyContentIsReady(); 

	});
})(jQuery);