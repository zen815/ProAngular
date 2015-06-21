/**
 * Created by zenmind on 2015-06-20.
 */
angular.module("ch14App")
    .controller("ch14FirstCtrl", function ($scope) {
        $scope.products = [
            { name: "Apples",   category: "Fruit",  price: 1.20,    expiry: 10 },
            { name: "Bananas",  category: "Fruit",  price: 2.42,    expiry: 7 },
            { name: "Pears",    category: "Fruit",  price: 2.02,    expiry: 6 },
            { name: "Tuna",     category: "Fish",   price: 20.45,   expiry: 3 },
            { name: "Salmon",   category: "Fish",   price: 17.93,   expiry: 2 },
            { name: "Trout",    category: "Fish",   price: 12.93,   expiry: 4 },
            { name: "Beer",     category: "Drinks", price: 2.99,    expiry: 365 },
            { name: "Wine",     category: "Drinks", price: 8.99,    expiry: 365 },
            { name: "Whiskey",  category: "Drinks", price: 45.99,   expiry: 365 }
        ];
        // 14-4 날짜 포멧팅
        $scope.getExpiryDate = function (days) {
            var now = new Date();
            return now.setDate(now.getDate() + days);
        }
        // 14-9 항목 개수 제한
        $scope.limitVal = "5";
        $scope.limitRange = [];
        for(var i=(0 - $scope.products.length) ; i <= $scope.products.length; i++) {
            $scope.limitRange.push(i.toString());
        }
        // 14-11 함수를 사용한 ng-repeat 개수 필터링
        $scope.selectItems = function(item) {
            return item.category == "Fish" || item.name == "Beer";
        }
        // 14-15 함수를 사용한 정렬\
        $scope.myCustomSorter = function(item){
            return item.expiry < 5 ? 0 :item.price;
        }
    })
    // 14-18 custom filter
    .filter("labelCase", function () {
        return function (value, reverse) {
            if (angular.isString(value)) {
                var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
                return (reverse ? intermediate[0].toLowerCase() :
                        intermediate[0].toUpperCase()) + intermediate.substr(1);
            } else {
                return value;
            }
        };
    })
    // 14-21 collection filter 지정한 개수만큼 객체를 건너뛴다. Apples,Bananas를 건너뜀
    .filter("skip", function () {
        return function (data, count) {
            if (angular.isArray(data) && angular.isNumber(count)) {
                if (count > data.length || count < 1) {
                    return data;
                } else {
                    return data.slice(count);
                }
            } else {
                return data;
            }
        }
    })
    // Building on Existing filters
    .filter("take", function ($filter) {
        return function (data, skipCount, takeCount) {
            var skippedData = $filter("skip")(data, skipCount);
            return $filter("limitTo")(skippedData, takeCount);
        }
    });