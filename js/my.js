$(document).ready(function () {

    function translate() {
        var mLanguage;

        //About
        mLanguage = activeLanguage.about;
        $("#about-title").html(mLanguage["title"]);
        $("#about-content-1").html(mLanguage["content-1"]);
        $("#about-content-2").html(mLanguage["content-2"]);
        $("#about-content-3").html(mLanguage["content-3"]);
        $("#about-content-4").html(mLanguage["content-4"]);
        $("#about-content-5").html(mLanguage["content-5"]);

        //Contact
        mLanguage = activeLanguage.contact;
        $("#contact-title").html(mLanguage["title"]);
        $("#contact-content-1").html(mLanguage["content-1"]);
        $("#contact-content-2").html(mLanguage["content-2"]);
        $("#contact-content-3").html(mLanguage["content-3"]);
    }

   translate();
});