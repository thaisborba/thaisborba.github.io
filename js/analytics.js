(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

var logPageView = setInterval(pageView, 1000);

function pageView(){
    if (window.ga && ga.loaded) {
        ga('create', 'UA-101947634-1', 'auto');
        ga('send', 'pageview');
        clearTimeout(logPageView);
    }else{
        console.log("OI");
        setInterval(logPageView, 5000);
    }
}