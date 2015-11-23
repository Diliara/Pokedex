angular.module('pokedexApp')

    .controller('PokemonController', ['$rootScope', '$scope', '$routeParams', 'pokemonSearchService', function ($rootScope, $scope, $routeParams, pokemonSearchService) {

        pokemonSearchService.getPokemonResource($routeParams.resource).success(function (pokemon) {

            $scope.pokemon = pokemon;
            $scope.sprites = [];


            for (n in pokemon.sprites) {
                pokemonSearchService.getPokemonResource(pokemon.sprites[n].resource_uri).success(function (sprite) {
                    $scope.sprites.push(sprite.image);
                });
            }

            pokemonSearchService.getPokemonResource(pokemon.descriptions[0].resource_uri).success(function (description) {
                $scope.description = description;
            });


        });

    }]);
