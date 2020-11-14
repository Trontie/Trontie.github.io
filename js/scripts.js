/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict



$( document ).ready(function() {
  //Se carico la pagina e non sono all'inizio, ci torno.
  if($(this).scrollTop() != 0) {
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        1000,
        "easeInOutExpo"
    );
  }
});

  //Colora la navbar in base a dove mi trovo
$(function(){
  var abt = $('#about');
  //var int = $('#interests');
  var edu = $('#education');
 // var sks = $('#skills');
  var awa = $('#awards');

  var abtOff = abt.offset().top;
//  var intOff = int.offset().top;
  var eduOff = edu.offset().top;
  //var sksOff = sks.offset().top;
  var awaOff = awa.offset().top;

  $(window).scroll(function(){
    var aTop = abt.height() + abtOff;
   // var iTop = int.height() + intOff;
    var eTop = edu.height() + eduOff;
 //   var sTop = sks.height() + sksOff;
    var awaTop = awa.height() + awaOff;

    var scroll = $(this).scrollTop();
/*
    console.log("atop: " + aTop);
    console.log("eTop: " + eTop);
    console.log("sTop: " + sTop);
    console.log("iTop: " + iTop);
    console.log("awaTop: " + awaTop);
    console.log(scroll);
*/
    if(scroll <= aTop)
      $('#sideNav').removeClass().addClass("navbar navbar-expand-lg navbar-dark fixed-top bg-warning");
    if (scroll > aTop && scroll <= eTop)
      $('#sideNav').removeClass().addClass("navbar navbar-expand-lg navbar-dark fixed-top bg-success");
    if (scroll > aTop && scroll > eTop && scroll <= awaTop)
      $('#sideNav').removeClass().addClass("navbar navbar-expand-lg navbar-dark fixed-top bg-danger");

  });
});
