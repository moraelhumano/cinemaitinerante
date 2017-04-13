(function () {
    'use strict'

    function config($routeProvider) {
        $routeProvider
          
            .when('/inicio',{
               controller: 'portafolio',
               templateUrl: '/scripts/portafolio/portafolio/portafolio.html',
               controllerAs: 'vm'
            })

            .when('/boletos',{
               controller: 'boletos',
               templateUrl: '/scripts/portafolio/boletos/boletos.html',
               controllerAs: 'vm'
            })

            .when('/compra',{
               controller: 'compra',
               templateUrl: '/scripts/portafolio/compra/compra.html',
               controllerAs: 'vm'
            })

            .when('/unete',{
               controller: 'unete',
               templateUrl: '/scripts/portafolio/unete/unete.html',
               controllerAs: 'vm'
            })

          


            .otherwise({
                redirectTo:'/inicio'
            });
    }

    angular
        .module('morado')
        .config(config)
})();