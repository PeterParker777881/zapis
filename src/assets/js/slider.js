/* Master */
const masterSlider = $('#masterSlider');
const masterSliderPrev = $('#masterSliderPrev');
const masterSliderNext = $('#masterSliderNext');

masterSlider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
});

masterSliderPrev.on("click", function (event) {
    event.preventDefault();

    masterSlider.slick('slickPrev');
});

masterSliderNext.on("click", function (event) {
    event.preventDefault();

    masterSlider.slick('slickNext');
});


/* Popular */
const popularSlider = $('#popularSlider');
const popularSliderPrev = $('#popularSliderPrev');
const popularSliderNext = $('#popularSliderNext');

popularSlider.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
});

popularSliderPrev.on("click", function (event) {
    event.preventDefault();

    popularSlider.slick('slickPrev');
});

popularSliderNext.on("click", function (event) {
    event.preventDefault();

    popularSlider.slick('slickNext');
});

/* Feedbacks */
const feedbacksSlider = $('#feedbacksSlider');
const feedbacksSliderPrev = $('#feedbacksSliderPrev');
const feedbacksSliderNext = $('#feedbacksSliderNext');

feedbacksSlider.slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
});

feedbacksSliderPrev.on("click", function (event) {
    event.preventDefault();

    feedbacksSlider.slick('slickPrev');
});

feedbacksSliderNext.on("click", function (event) {
    event.preventDefault();

    feedbacksSlider.slick('slickNext');
});
