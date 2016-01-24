(function () {
    'use strict';

    angular
        .module('component-check')
        .directive('componentCheck', componentCheck);

    /* @ngInject */
    function componentCheck($window) {
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'component-check/component-check.tmpl.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.text = attrs.componentCheck;
        }
    }
})();
