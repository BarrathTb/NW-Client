$(function () {
  // Preload audio
  var toast = new Audio("toast.wav");

  $(".code").on("click", function (e) {
    e.preventDefault();
    // Pause and reset audio
    toast.pause();
    toast.currentTime = 0;
    // Play audio
    toast.play();
    $("#liveToast").toast({ autohide: false }).toast("show");
  });

  $(document).on("keyup", function (e) {
    if (e.keyCode === 27) {
      // Escape key
      $("#liveToast").toast("hide");
    }
  });
  // Attach click event listener to each product (replace '.product' with your own selector)
  $(".code").click(function () {
    const productName = $(this).data("product-name");
    const discountCode = $(this).data("discount-code");

    $(".toast-header strong#name").text(productName);

    $(".toast-body strong#code").text(discountCode);

    // Show the toast (with Bootstrap Toast)
    $("#liveToast").toast("show");
  });
});
