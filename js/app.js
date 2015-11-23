angular
    .module('pokedexApp', [
        'ngRoute',
        'ui.bootstrap',
        'ngDragDrop'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/index.html',
                controller: 'PokemonListController'
            })
            .when('/home', {
                redirectTo: '/'
            })
            .when('/comparison', {
                templateUrl: 'templates/comparison/index.html',
                controller: 'PokemonComparisonController'
            })
            .when('/pokemon', {
                templateUrl: 'templates/pokemon/index.html',
                controller: 'PokemonController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])


    .run(function ($rootScope) {
        $rootScope.api = "http://pokeapi.co/api/v1/";
        $rootScope.apiUri = "http://pokeapi.co/";
    });


