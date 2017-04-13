(function () {
    'use strict'

    unete.$inject = ['$location'];
    function unete($location) {

      var vm = this
     
 
      activeController();

      function activeController(){
        $('.modal').modal().modal();

          
         
      }

           



    }

    angular
        .module('morado')
        .controller('unete', unete)

})();

