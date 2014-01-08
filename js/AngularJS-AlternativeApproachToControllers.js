var app = angular.module('phoneApp', []);

// This style of controller allows you to itself back to the calling element, 
// allows you to use the [controller].[function] syntax in markup
app.controller('AppCtrl', function ($scope) {

    this.sayHi = function () {
        alert("hi");
    }

    return $scope.AppCtrl = this;

});