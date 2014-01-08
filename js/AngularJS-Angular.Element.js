var app = angular.module('app', []);

app.directive("dumbPassword", function () {
    var validElement = angular.element("<div>{{ model.input }}</div>");

    var link = function (scope) {
        // scope.$watch watches values and functions like a calculated observable
        scope.$watch("model.input", function (value) {
            if (value === "password") {
                validElement.toggleClass("alert-box alert")
            }
        })
    }

    return {
        restrict: "E",
        // replaces the directive with the defined template entirely (removes the custom tags)
        replace: true,
        template: '<div>' +
                  '<input type="text" ng-model="model.input" />' +
                  '</div>',
        // appends the following logic to the DOM during the "compile" phase
        compile: function (tElem) {
            tElem.append(validElement);

            return link;
        }
    }
})