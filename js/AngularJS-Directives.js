var app = angular.module("superhero", [])

app.directive("superman", function () {
    return {
        // For the restrict functionality, the values are as follows
        // "E" equals element
        // "C" equals class
        // "A" equals attribute
        // "M" equals comment (utilizes HTML comments like Knockout.js does)

        //restrict: "E",
        //template: "<div>Here I am to save the day</div>"
        
        restrict: "A",
        link: function () {
            alert("I'm working stronger")
        }        
    }
})

app.directive("flash", function () {
    return {
        restrict: "A",
        link: function () {
            alert("I'm working faster")
        }
    }
})