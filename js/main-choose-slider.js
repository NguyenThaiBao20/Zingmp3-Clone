$(document).ready(function () {
    $('.clazy-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // nextArrow: $('.next'),
        // prevArrow: $('.prev'),
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});


// current
$(document).ready(function () {
    $('.clazy-current').slick({
        // lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: $('.next-list-current'),
        prevArrow: $('.prev-list-current'),
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// can
$(document).ready(function () {
    $('.clazy-can').slick({
        // lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        // slidesToScroll: false,
        nextArrow: $('.next-list-can'),
        prevArrow: $('.prev-list-can'),
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// color
$(document).ready(function () {
    $('.clazy-color').slick({
        // lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        // slidesToScroll: false,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// corner
$(document).ready(function () {
    $('.clazy-corner').slick({
        // lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        // slidesToScroll: false,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Radio
$(document).ready(function () {
    $('.clazy-radio').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 7,
        nextArrow: $('.next-radio'),
        prevArrow: $('.prev-radio'),
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// mix
$(document).ready(function () {
    $('.clazy-mix').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// heard
$(document).ready(function () {
    $('.clazy-heard').slick({
        // lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        // slidesToScroll: false,
        nextArrow: $('.next-list-heard'),
        prevArrow: $('.prev-list-heard'),
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// new song every day
$(document).ready(function () {
    $('.clazy-new').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Singer
$(document).ready(function () {
    $('.clazy-singer').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        nextArrow: $('.next-singer'),
        prevArrow: $('.prev-singer'),
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// top100
$(document).ready(function () {
    $('.clazy-top100').slick({
        // lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        // slidesToScroll: false,
        nextArrow: $('.next-list-top100'),
        prevArrow: $('.prev-list-top100'),
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// mixtape
$(document).ready(function () {
    $('.clazy-mixtape').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// takecare 
$(document).ready(function () {
    $('.clazy-care').slick({
        // lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 5,
        // slidesToScroll: false,
        nextArrow: $('.next-list-care'),
        prevArrow: $('.prev-list-care'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// new release
$(document).ready(function () {
    $('.clazy-newrl').slick({
        // lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 3,
        // slidesToScroll: false,
        nextArrow: $('.next-list-newrl'),
        prevArrow: $('.prev-list-newrl'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Favorite Artist
