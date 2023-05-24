$(window).resize(() => {
  if (document.body.clientWidth > 768) {
    $(".navbar__links__wrapper").removeClass("nav__responsive");
    $("body").css("overflow", "auto");
  }
});

$("#hamburger").on("click", () => {
  console.log("???????");
  $(".navbar__links__wrapper").addClass("nav__responsive");
  $("body").css("overflow", "hidden");
});

$("#close").on("click", () => {
  $(".navbar__links__wrapper").removeClass("nav__responsive");
  $("body").css("overflow", "auto");
});
