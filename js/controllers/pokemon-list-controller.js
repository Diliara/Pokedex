angular.module('pokedexApp')

    .controller('PokemonListController', ['$rootScope', '$scope', 'pokemonSearchService', function ($rootScope, $scope, pokemonSearchService) {


        pokemonSearchService.getAllPokemon().success(function (data) {
            $scope.pokemonList = data.objects;
        });

        $scope.comparePokemonOne = {};
        $scope.comparePokemonTwo = {};






    }]);
