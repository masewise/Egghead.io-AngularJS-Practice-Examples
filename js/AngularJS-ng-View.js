var app = angular.module('app', []);

// Every time the current route changes, the included view changes with it 
// according to the configuration of the $route service.  The app.config is 
// one place you can configure your routes using the $routeProvider.
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: "app.html",
            controller: "AppCtrl"
        })
        .when('/pizza',
        {
            template: "Yum!!"
        })
        .otherwise(
        {
            template: "This doesn't exist!"
        })
})

// You cannot inject $routeProvider into a controller, but you can inject a $route
app.controller("AppCtrl", function ($scope, $route) {
    $scope.model = {
        message: "This is my app!!!"
    }
})