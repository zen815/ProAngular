/**
 * Created by zennote on 15. 6. 12.
 */

angular.module("exampleApp.Filters", [])
    .filter("dayName", function() {
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"];
        return function(input) {
            return angular.isNumber(input) ? dayNames[input] : input;
        };

    });