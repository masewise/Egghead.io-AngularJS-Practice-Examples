var app = angular.module('zippyApp', []);

app.directive("zippy", function () {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        // Property that lists the path(s) or id(s) of the appropriate templates
        templateUrl: 'zippy.html',
        link: function (scope) {
            scope.isContentVisible = false;

            scope.toggleContent = function () {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
})