
(function(){
    'use strict';

    angular
        .module("morado")
        .factory("apiMovies",apiMovies);

    apiMovies.$inject = ["$resource"];
    function apiMovies($resource){

        return $resource('https://api.themoviedb.org/3/movie/550?api_key=48c706a018606fa93ff21a3b2cb9def0');
      
    }




})();
