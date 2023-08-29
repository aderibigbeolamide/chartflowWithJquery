$(document).ready(function() {
    $('.nav-item').click(function() {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function () {
  $(".mobile-menu").click(function () {
    $(".search-bar").toggle();
  });

  $(window).on("resize", function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    if (windowWidth > 640) {
      $(".search-bar").css("display", "flex");
      $(".search-bar").css("flex-direction", "row");
    } else {
      $(".search-bar").css("display", "flex");
      $(".search-bar").css("flex-direction", "column");
    }
  });
});