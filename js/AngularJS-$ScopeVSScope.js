var app = angular.module('app', []);

// The naming that gets passed at this level does matter, but the order doesn't.
// A lookup is performed on the parameters to match them with providers.
// TIP: The bracket format protects against minification (since variables are changed).
app.controller("MyCtrl", ["$scope", "$http", function (a, b) {
    console.log(a);
    console.log(b);
}]);

app.directive("myDirective", function () {
    return {
        // The naming does not matter within objects, but the order does.
        // You can name the variables whatever you want (no lookups performed).
        link: function (scope, element, attrs) {
            console.log(scope);
        }
    }
});