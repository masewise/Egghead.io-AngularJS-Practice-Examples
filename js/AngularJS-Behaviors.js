var app = angular.module('behaviorApp', []);

app.directive("enter", function () {
    // Short-hand version of previous directive setup
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            // "attrs" maps to whatever attributes you enter into the "enter" HTML tag
            // This functionality allows you to make directives truly reusable
            element.addClass(attrs.enter);
        })
    }
})

app.directive("leave", function () {
    return function (scope, element, attrs) {
        element.bind("mouseleave", function () {
            element.removeClass(attrs.enter);
        })
    }
})