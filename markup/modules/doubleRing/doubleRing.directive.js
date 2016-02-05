(function () {
    'use strict';

    angular
        .module('doubleRing')
        .directive('doubleRing', doubleRing);


    /* @ngInject */
    function doubleRing($window){
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'doubleRing/doubleRing.tmpl.html',
            scope: {
                text: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }
})();
