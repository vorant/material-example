(function () {
    'use strict';

    angular
        .module('monaLisa')
        .directive('monaLisa', monaLisa);


    /* @ngInject */
    function monaLisa($window) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'monaLisa/monaLisa.tmpl.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
})();
