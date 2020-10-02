jQuery("document").ready(function ($) {
  var menuBtn = $(".menu-icon"),
    menu = $(".navigation ul");
  links = $(".menu-icon").find("a");

  menuBtn.click(function () {
    if (menu.hasClass("show")) {
      menu.removeClass("show");
    } else {
      menu.addClass("show");
    }
  });
});
menu.addClass("show");
