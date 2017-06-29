$(document).ready(function () {

    var images = [];
    var imagePosition = -1;
    images[0] = "makeup-1.jpg";
    images[1] = "makeup-2.jpg";
    images[2] = "makeup-3.jpg";
    images[3] = "makeup-4.jpg";
    images[4] = "makeup-5.jpg";
    images[5] = "makeup-6.jpg";

    function displayNextImage() {
        imagePosition = (imagePosition === images.length - 1) ? 0 : imagePosition + 1;
        document.getElementById("makeup-image").src = images[imagePosition];
        $('#makeup-image').animate({
            opacity: 1
        }, {
            duration: 5000,
            complete: animateToHide
        });

    }

    function animateToHide() {
        $('#makeup-image').animate({
            opacity: 0
        }, {
            duration: 1000,
            complete: displayNextImage
        });
    }

    function animateScrollDown() {
        $('#scroll-image').animate({
            'top': '10'
        }, {
            duration: '1000',
            complete: function () {
                $('#scroll-image').animate({
                    top: 0
                }, {
                    duration: 1000,
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

        //About
        mLanguage = activeLanguage.about;
        $("#about-title").html(mLanguage["title"]);

        //About
        mLanguage = activeLanguage.rupert;
        $("#rupert-title").html(mLanguage["title"]);
        $("#rupert-content-1").html(mLanguage["content-1"]);
        $("#rupert-content-2").html(mLanguage["content-2"]);
        $("#rupert-content-3").html(mLanguage["content-3"]);
        $("#rupert-content-4").html(mLanguage["content-4"]);

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