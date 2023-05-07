$window = $(window);
$window.scroll(function () {
  if ($window.scrollTop() >= $("#home").offset().top - 150) {
    $(".Navbar-links").children().removeClass("active");
    $(".Navbar-links").children().eq(0).addClass("active");
  }
  if ($window.scrollTop() >= $("#about").offset().top - 150) {
    $(".Navbar-links").children().removeClass("active");
    $(".Navbar-links").children().eq(1).addClass("active");
  }
});

function changeOption(div) {
  $(".Eeo__inner").children().removeClass("selected");
  $(div).first().addClass("selected");
}
