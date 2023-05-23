if (document.body.clientWidth > 768) {
  console.log("!!!!!");
  $(".navbar__links__wrapper").removeClass("nav__responsive");
  $("body").css("overflow", "auto");
}

$("#hamburger").on("click", () => {
  console.log("???????");
  $(".navbar__links__wrapper").addClass("nav__responsive");
  $("body").css("overflow", "hidden");
});
