$(document).ready(function() {
  //responsive menu toggle
  // $("#menutoggle").click(function() {
  //   $(".xs-menu").toggleClass("displaynone");
  // });

  //add active class on menu
  $("ul li").click(function(e) {
    // console.log(e.target);
    // e.preventDefault();
    // $("li").removeClass("active");
    // $(this).addClass("active");
  });

  //drop down menu
  $(".drop-down").hover(function(e) {
    $(e.target)
      .next()
      .addClass("display-on");
  });

  // leave
  $(".drop-down").mouseleave(function() {
    $(".mega-menu").removeClass("display-on");
  });
});
