var app = angular.module('zippyApp', []);

// You can inject the $templateCache into this run function to load the templates
app.run(function ($templateCache) {
    $templateCache.put(
        "zippy.html",
        '<div>' +
        '<h3 ng-click="toggleContent()">{{ title }}</h3>' +
        '<div ng-show="isContentVisible" ng-transclude></div>' +
        '</div>'
    );
})

app.directive("zippy", function ($templateCache) {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        // You can also fetch the templates using the $templateCache.get() functionality
        templateUrl: "zippy.html",
        link: function (scope) {
            scope.isContentVisible = false;

            scope.toggleContent = function () {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
})