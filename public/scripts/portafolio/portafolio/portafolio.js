(function () {
    'use strict'

    portafolio.$inject = ['$location','apiMovies'];
    function portafolio($location, apiMovies) {

      var vm = this
      vm.infoMovie = null;

        apiMovies.get()
        .$promise
            .then(function(response){
                vm.infoMovie = response.data;
                console.log(vm.infoMovie);
                console.log("Ese men");
            })
      vm.closeModal = closeModal;
      
 
      activeController();

      function activeController(){
        $('.modal').modal().modal();

          $('.slider').slider();
          var ref = new Firebase('https://portafolio-a3617.firebaseio.com');

            $('#enviar').on('click', function () {
                ref.push({
                    name: $('#name-send').val(),
                    email: $('#email-send').val(),
                    message: $('#message-send').val(),
                });

            });
               $('#enviar_resp').on('click', function () {
                ref.push({
                    name: $('#name-resp').val(),
                    email: $('#email-resp').val(),
                    message: $('#message-resp').val(),
                });

            });


          ref.on('child_added', function (snapshot) {
              var newName = snapshot.val();
              var newEmail = snapshot.val();
              var newText = snapshot.val();
              $('#name').append(newName.name);
              $('#email').append(newEmail.email);
              $('#message').append(newText.message);
          });   
      }

           

      
    
        function closeModal(){
            $('#modal1').modal().modal('close');
            $('#modal2').modal().modal('close');
        }




    }

    angular
        .module('morado')
        .controller('portafolio', portafolio)

})();


  
         







       
      





              

        


     



