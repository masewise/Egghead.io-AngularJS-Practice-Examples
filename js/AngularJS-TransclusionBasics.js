var app = angular.module('phoneApp', []);

app.controller('AppCtrl', function ($scope) {
    $scope.leaveVoicemail = function (number, message) {
        alert("Number: " + number + " said: " + message);
    };
});

app.directive('panel', function () {
    return {
        restrict: "E",

        // Allows DOM elements that are nested within directives to write to the DOM
        transclude: true,

        // ng-transclude will add in the nested DOM elements wherever it is placed in the template
        template: '<div class="panel" ng-transclude>This is a panel component</div>'
    };
});