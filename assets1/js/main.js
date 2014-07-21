function fitBanner(id,offset){
	var originalHeight = $(id).height();
	console.log("width of "+id+": "+originalHeight);
	var windowHeight = $(window).height();
	var headerHeight = $("header").height();
	// alert($(".center-triangle-div").height());
	var triangleHeight = 30; //height of the triangle

	windowHeight = windowHeight - offset;
	console.log("width of "+id+": "+windowHeight);
  if($(id).width() < 767){
    windowHeight = windowHeight + offset;  
    console.log("below 767" + windowHeight);  
  }
  // if(windowHeight > originalHeight){
    $(id).css({ "min-height": windowHeight+"px" });
  // }
	// $(window).resize(function() {
	//   hi = $(window).height();
	//   $(id).css({ height: hi+"px" });
	// });
}

fitBanner("#front-page",0);
fitBanner("#content",0);
fitBanner("#signup",0);

function validateEmail(emailField){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(emailField);
}

function scrollToDiv(id){
  $('html,body').animate({scrollTop: $(id).offset().top - 50},500,"swing");
   return false;
}