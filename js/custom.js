// hamburger
$(".js_hamburger_open").click(function () {
  $(".header_modal").css("display", "block");
  $(".header_modal").animate(
    {
      right: 0,
    },
    300
  );
});
$(".js_hamburger_close").click(function () {
  $(".header_modal").animate({
    right: "-100%",
  });
});
// community modal
$(".js_modal_open").click(function () {
  $(".community_modal").animate(
    {
      top: "0",
    },
    500
  );
});
$(".js_modal_close").click(function () {
  $(".community_modal").animate(
    {
      top: "100%",
    },
    300
  );
});
