(function () {
    'use strict'

    compra.$inject = ['$location'];
    function compra($location) {

      var vm = this
     
 
      activeController();

      function activeController(){
        $('.modal').modal().modal();

          
         
      }

           



    }

    angular
        .module('morado')
        .controller('compra', compra)

})();

