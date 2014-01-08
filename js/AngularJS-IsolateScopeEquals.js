﻿var app = angular.module('drinkApp', []);

app.controller("AppCtrl", function ($scope) {
    $scope.ctrlFlavor = "blackberry";
})

app.directive("drink", function () {
    return {
        restrict: "A",
        scope: {
            flavor: "="
        },
        template: '<input type="text" ng-model="flavor" />'
    }
});