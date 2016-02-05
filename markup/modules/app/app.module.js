(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name app
     *
     * @description
     * Directives for app module
     */
    angular
        .module('app', [
            'ngMaterial',

            'wallClock',
            'monaLisa',
            'doubleRing',
            'templates',
            'component-check'
        ])
    ;


})();
