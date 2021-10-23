const modal = $('#modal');

$('a').on("click", function(event) {
  event.preventDefault();

  modal.addClass('show');

  setTimeout(function () {
    modal.removeClass('show');
  }, 4000);
});

$('.master__slider-arrow').on("click", function (event) {
  event.preventDefault();

  modal.removeClass('show');
});

$('.popular__slider-arrow').on("click", function (event) {
  event.preventDefault();

  modal.removeClass('show');
});

$('.feedbacks__slider-arrow').on("click", function (event) {
  event.preventDefault();

  modal.removeClass('show');
});