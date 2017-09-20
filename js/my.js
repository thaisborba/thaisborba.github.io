$(document).ready(function () {

    var images = [];
    var imagePosition = -1;
    images[0] = "makeup-1.png";
    images[1] = "makeup-2.png";
    images[2] = "makeup-3.png";
    images[3] = "makeup-4.png";
    images[4] = "makeup-5.png";
    images[5] = "makeup-6.png";
    images[6] = "makeup-7.png";
    images[7] = "makeup-8.png";
    images[8] = "makeup-9.png";
    images[9] = "makeup-10.png";

    var countClicks = 0;

    $("#makeup-image").on("click", function () {
        displayNextImage();
        countClicks++;
    });

    function displayNextImage() {
        imagePosition = (imagePosition === images.length - 1) ? 0 : imagePosition + 1;
        $("#makeup-image").attr("src", images[imagePosition]);

        if (countClicks == 0) {
            $('#makeup-image').animate({
                opacity: 1
            }, {
                duration: 'slow',
                complete: waitingToHide
            });
        } else {
            countClicks--;
        }
    }

    function waitingToHide() {
        setTimeout(animateToHide, '3000');
    }

    function animateToHide() {
        $('#makeup-image').animate({
            opacity: 0
        }, {
            duration: 'slow',
            complete: displayNextImage
        });
    }

    function animateScrollDown() {
        $('.scroll-image').animate({
            'top': 10

        }, {
            duration: '1000',
            complete: function () {
                $('.scroll-image').animate({
                    top: 0
                }, {
                    duration: '1000',
                    complete: animateScrollDown
                });
            }
        });
    }

    function translate() {
        var mLanguage;

        //Cover
        mLanguage = activeLanguage.cover;
        $("#cover-subtitle").html(mLanguage["subtitle"]);
        $("#cover-heart").html(mLanguage["heart"]);
        $("#cover-subtitle-sm").html(mLanguage["subtitle"]);
        $("#cover-heart-sm").html(mLanguage["heart"]);

        //About
        mLanguage = activeLanguage.about;
        $("#about-title").html(mLanguage["title"]);
        $("#about-subtitle").html(mLanguage["subtitle"]);
        $("#about-content-1").html(mLanguage["content-1"]);
        $("#about-content-2").html(mLanguage["content-2"]);
        $("#about-content-3").html(mLanguage["content-3"]);
        $("#about-content-4").html(mLanguage["content-4"]);

        //Contact
        mLanguage = activeLanguage.contact;
        $("#contact-title").html(mLanguage["title"]);
        $("#contact-content-1").html(mLanguage["content-1"]);
        $("#contact-content-2").html(mLanguage["content-2"]);
        $("#contact-content-3").html(mLanguage["content-3"]);
    }

    translate();
    animateScrollDown();
    displayNextImage();
});