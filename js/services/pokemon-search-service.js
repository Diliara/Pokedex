angular.module('pokedexApp')

    .service('pokemonSearchService', ['$http', '$rootScope', function ($http, $rootScope) {

    this.getAllPokemon = function () {
         return $http.get($rootScope.api + 'sprite/?limit=40');
    };

    this.getPokemonResource = function (resource) {

        //console.log($rootScope.apiUri + resource);
        return $http.get($rootScope.apiUri + resource);


    };
}]);
