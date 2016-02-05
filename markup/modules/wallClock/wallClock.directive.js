(function () {
    'use strict';

    angular
        .module('wallClock')
        .directive('wallClock', wallClock);


    /* @ngInject */
    function wallClock($window) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'wallClock/wallClock.tmpl.html'

        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
})();
