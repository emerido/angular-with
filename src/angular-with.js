(function (angular) {

    "use strict";

    angular.module('ngWith', [])
        .directive('ngWith', ['$parse', function($parse) {

            return {
                link: function(scope, element, attributes) {
                    var getter = $parse(attributes.ngWith);
                    var setter = getter.assign;

                    function watchParent() {
                        var values = getter(scope.$parent);
                        var result = {};

                        for (var index in values) {
                            //noinspection JSUnfilteredForInLoop
                            result[index] = values[index];
                        }
                        return result;
                    }

                    // Watch parent changes
                    scope.$parent.$watch(watchParent, function(result, old) {

                        angular.forEach(result, function(value, key) {
                            scope[key] = value;
                        });
                        angular.forEach(old, function(value, key) {
                            if (false === result.hasOwnProperty(key)) {
                                delete scope[key];
                            }
                        });
                    }, true);

                    function watchLocal() {
                        var result = {};

                        angular.forEach(scope, function(value, key) {
                            if (key[0] !== '$' && key !== 'constructor') {
                                result[key] = scope[key];
                            }
                        });

                        return result;
                    }

                    // Watch local changes
                    scope.$watch(watchLocal, function(data) {
                        setter(scope.$parent, data);
                    }, true);
                },
                scope: true
            };
        }])
    ;
})(angular);