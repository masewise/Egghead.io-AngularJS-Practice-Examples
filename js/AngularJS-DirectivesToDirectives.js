var app = angular.module('superApp', []);

app.directive("superhero", function () {
    return {
        restrict: "E",

        // By adding an isolated scope object to your AngularJS directive 
        // you can insure that each element using that directive has its own scope. T
        // This prevents it from affecting sibling directives and encapsulates the directive.
        scope: {},

        controller: function ($scope) {
            $scope.abilities = [];            

            this.addStrength = function () {
                $scope.abilities.push("strength")
            }

            this.addSpeed = function () {
                $scope.abilities.push("speed")
            }

            this.addFlight = function () {
                $scope.abilities.push("flight")
            }
        },

        link: function (scope, element) {
            element.addClass("button");
            element.bind("mouseenter", function () {
                console.log(scope.abilities);
            })
        }
    }
});

app.directive("strength", function () {
    return {
        require: "superhero",
        link: function (scope, element, attrs, superheroCtrl) {
            superheroCtrl.addStrength();
        }
    }
});

app.directive("speed", function () {
    return {
        require: "superhero",
        link: function (scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    }
});

app.directive("flight", function () {
    return {
        require: "superhero",
        link: function (scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    }
});