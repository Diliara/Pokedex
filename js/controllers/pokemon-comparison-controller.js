angular.module('pokedexApp')

    .controller('PokemonComparisonController', ['$rootScope', '$scope', '$routeParams', 'pokemonSearchService', function ($rootScope, $scope, $routeParams, pokemonSearchService) {


        var pokemonResource1 = $routeParams.resource1;
        var pokemonResource2 = $routeParams.resource2;


        pokemonSearchService.getPokemonResource(pokemonResource1).success(
            function (pokemon1) {
                $scope.pokemon1 = pokemon1;
                $scope.sprites1 = [];

                for (p1 in pokemon1.sprites) {

                    pokemonSearchService
                        .getPokemonResource(pokemon1.sprites[p1].resource_uri)
                        .success(function (sprite) {
                            $scope.sprites1.push(sprite.image);
                        });
                }

                pokemonSearchService
                    .getPokemonResource(pokemon1.descriptions[0].resource_uri)
                    .success(function (description) {
                        $scope.description1 = description;
                    });


            }
        );


        pokemonSearchService.getPokemonResource(pokemonResource2).success(
            function (pokemon2) {
            $scope.pokemon2 = pokemon2;
            $scope.sprites2 = [];


            for (p2 in pokemon2.sprites) {

                pokemonSearchService
                    .getPokemonResource(pokemon2.sprites[p2].resource_uri)
                    .success(function (sprite) {
                        $scope.sprites2.push(sprite.image);
                    });
            }


            pokemonSearchService
                .getPokemonResource(pokemon2.descriptions[0].resource_uri)
                .success(function (description) {
                    $scope.description2 = description;
                });

        })
        ;


    }]);
