var app = angular.module('drinkApp', []);

app.controller("AppCtrl", function ($scope) {
    $scope.ctrlFlavor = "blackberry";
})

app.directive("drink", function () {
    return {
        restrict: "A",
        scope: {
            flavor: "@"
        },
        template: '<div>{{ flavor }}</div>'

        /* This logic is the same as the "@" symbol above inside the scope property
            link: function (scope, element, attrs) {
                scope.flavor = attrs.flavor;
            }
        */
    }
});