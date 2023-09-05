$(function () {
  //create array of attentionseekers
  const attentionSeekers = [
    "bounce",
    "flash",
    "pulse",
    "shakeX",
    "shakeY",
    "headShake",
    "swing",
    "tada",
    "wobble",
    "jello",
    "heartBeat",
  ];

  //create random number between 0 and array length
  const randomIndex = Math.floor(Math.random() * attentionSeekers.length);

  //now randomly select one of the attention seekers
  $(".birthday").addClass(
    "animate__animated animate__" + attentionSeekers[randomIndex]
  );
  //create date picker
  $("#birthday").pickadate();
  $("#birthday").pickadate({ format: "mmmm, d" });

  // uncheck all checkboxes (FireFox)
  $(".form-check-input").each(function () {
    $(this).prop("checked", false);
  });

  // event listener for check/uncheck
  $(".form-check-input").on("change", function () {
    // make the image visible
    $("#" + this.id + "Img").css("visibility", "visible");
    // animate balloon in/out based on checkbox
    $(this).is(":checked")
      ? $("#" + this.id + "Img")
          .removeClass()
          .addClass("animate__animated animate__bounceInDown")
      : $("#" + this.id + "Img").addClass(
          "animate__animated animate__bounceOutUp"
        );
  });

  //change title background color on checkbox label hover
  $(".form-check-label.red").hover(
    function () {
      $(".birthday").css("backgroundColor", "red");
    },
    function () {
      $(".birthday").css("backgroundColor", "");
    }
  );
  $(".form-check-label.green").hover(
    function () {
      $(".birthday").css("backgroundColor", "green");
    },
    function () {
      $(".birthday").css("backgroundColor", "");
    }
  );
  $(".form-check-label.blue").hover(
    function () {
      $(".birthday").css("backgroundColor", "blue");
    },
    function () {
      $(".birthday").css("backgroundColor", "");
    }
  );

  //insert checkALl button to select or deselect all checkboxes
  $("#checkAll").click(function () {
    const checkboxes = $(".form-check-input");
    if ($(this).data("select")) {
      checkboxes.each(function () {
        $(this).prop("checked", false);
      });
      $(this).data("select", false);
    } else {
      checkboxes.each(function () {
        $(this).prop("checked", true);
      });
      $(this).data("select", true);
    }
    checkboxes.trigger("change");
  });

  //onsubmit show toast
  $("#submit").on("click", function (e) {
    e.preventDefault();

    // Only show the toast if none of the checkboxes are checked
    if ($('input[type="checkbox"]:checked').length === 0) {
      $("#liveToast")
        .addClass("animate__animated animate__slideInLeft")
        .toast({ autohide: true, delay: 5000 })
        .toast("show");
    }
  });

  $("#liveToast").on("shown.bs.toast", function () {
    $("#liveToast").removeClass("animate__animated animate__slideInLeft");
  });

  //on escape remove toast
  $(document).on("keyup", function (e) {
    if (e.keyCode === 27) {
      // Escape key
      $("#liveToast")
        .addClass("animate__animated animate__slideOutRight")
        .toast({ autohide: false, delay: 5000 })
        .toast("hide");
    }
  });

  $("#liveToast").on("hidden.bs.toast", function () {
    $("#liveToast").removeClass("animate__animated animate__slideOutRight");
  });

  // Attach click event listener to submit button
  $("#submit").click(function () {
    const color = $(this).data("balloon-color");

    $(".toast-body strong#color").text(color);

    // Show the toast (with Bootstrap Toast)
    if ($('input[type="checkbox"]:checked').length === 0) {
      $("#liveToast")
        .addClass("animate__animated animate__slideInLeft")
        .toast({ autohide: true, delay: 5000 })
        .toast("show");
    }
  });
});
