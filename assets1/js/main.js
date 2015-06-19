var windowHeight,headerHeight,frontPaperImage,frontPaper;
var IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
var IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
var orientation = window.orientation;


if (IS_IPAD) {
  IS_IPHONE = false;
  // alert("is ipad");
} else {
  // alert("not ipad");
}

if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  IS_IPAD = true;
  // alert('Its Safari');
} else {
  IS_IPAD = false;
  // alert('not safari');
}

function validateEmail(emailField){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(emailField);
}

function scrollToDiv(id){
  $('html,body').animate({scrollTop: $(id).offset().top - 50},500,"swing");
   return false;
}

function fitBanner(id,offset){
	windowHeight = $(window).height();
	headerHeight = $("header").height();
  orientation = window.orientation;

  orientation = window.orientation;
  setTimeout(function(){
    // alert(orientation);
    headerHeight = ( IS_IPAD && (orientation == -90 || orientation == 90) ) ? -20 : 0;
    windowHeight = windowHeight + headerHeight;
    $(id).css({ "min-height": windowHeight+"px" });
    // alert(windowHeight);
  },400);
}

function setPadding(){
  frontPaperImage = ($(window).height() < 400) ? "10px" : $(window).height()/6 + "px";
  frontPaper = ($(window).height() < 400) ? "0px" : $(window).height()/16 + "px";
  orientation = window.orientation;
  setTimeout(function(){
    // alert(orientation);
    notifyFormOffset = ( IS_IPAD && (orientation == -90 || orientation == 90) ) ? -11 : 28;
    notifyForm = $(window).height() - $("#notify-form").height() + notifyFormOffset + "px";

    $("#front-page-image,#front-paper").css({
      "padding-top" : frontPaperImage
    });

    $(".logo").css({
      "padding-top" : frontPaper
    });

    $("#notify-form").css({
      "top" : notifyForm
    });
  },400);
}

// console.log("$(document).height():"+$(document).height());
// alert("$(window).orientaion():"+window.orientation);

fitBanner("#front-page",0);
setPadding();

$(window).resize(function() {
	fitBanner("#front-page",0);
  setPadding();
});

// $('#email').one('click',function(){
// 	if($(window).width() > 1240){
// 		$('html,body').animate({scrollTop: 150},380,"swing");	
// 	}
// });