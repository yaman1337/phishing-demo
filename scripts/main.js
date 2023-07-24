$(function () {
  var btn = $(".btn"),
    bg_1 = $(".bg-1"),
    bg_2 = $(".bg-2"),
    ang_a = $(".ang-a"),
    ang_b = $(".ang-b"),
    ang_c = $(".ang-c"),
    text = $(".text"),
    glow = $(".glow"),
    dots = $(".dots"),
    shine = $(".shine");
  var start = function () {
    ang_a
      .removeClass("d-none")
      .removeClass(ang_a.data("in"))
      .addClass(ang_a.data("in"));
    ang_b
      .removeClass("d-none")
      .removeClass(ang_b.data("in"))
      .addClass(ang_b.data("in"));
    ang_c
      .removeClass("d-none")
      .removeClass(ang_c.data("in"))
      .addClass(ang_c.data("in"));
    bg_2
      .removeClass("d-none")
      .removeClass(bg_2.data("out"))
      .addClass(bg_2.data("in"));
    setTimeout(function () {
      bg_1
        .removeClass("d-none")
        .removeClass(bg_1.data("out"))
        .addClass(bg_1.data("in"));
    }, 500);
    btn.fadeOut(200);
  };
  btn.on("click", start);
  bg_2
    .off()
    .on(
      "animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd",
      function () {
        setTimeout(function () {
          bg_2.fadeOut("fast").addClass("d-none").removeClass(bg_2.data("in"));
          text.removeClass("d-none").addClass(text.data("in"));
        }, 600);
      }
    );
  text
    .off()
    .on(
      "animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd",
      function () {
        setTimeout(function () {
          text.addClass("txt-ind");
          glow.removeClass("d-none").addClass(glow.data("in"));
          dots.removeClass("d-none");
          shine.removeClass("d-none").addClass(shine.data("in"));
        }, 50);
      }
    );
  glow
    .off()
    .on(
      "animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd",
      function () {
        bg_2
          .removeAttr("style")
          .removeClass("d-none")
          .addClass(bg_2.data("out"));
      }
    );
  shine
    .off()
    .on(
      "animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd",
      function () {
        setTimeout(function () {
          dots.fadeOut(300);
          glow.fadeOut(500);
        }, 1000);
        setTimeout(function () {
          shine.fadeOut(400);
          bg_1.removeClass(bg_1.data("in")).addClass(bg_1.data("out"));
        }, 2000);
        setTimeout(function () {
          text.removeClass(text.data("in")).addClass(text.data("out"));
          setTimeout(function () {
            $(document).trigger("animate:reset");
          }, 500);
        }, 500000);
      }
    );

  $(document).on("animate:reset", function () {
    $(".el").each(function () {
      $(this)
        .addClass("d-none")
        .removeClass($(this).data("in"))
        .removeClass($(this).data("out"))
        .removeAttr("style");
    });
    text.removeClass("txt-ind");
    btn.fadeIn(200);
  });
});
