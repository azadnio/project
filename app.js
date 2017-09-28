var app = angular.module("app", ['ngRoute']);

app.config(["$routeProvider", "$locationProvider",function($routeProvider, $locationProvider) {

    $routeProvider.
    when('/items', {
        templateUrl: 'views/itemspanal.html',
        controller: 'itemsViewController'
    }).
    when('/items/:categoryId', {
        templateUrl: 'views/itemspanal.html',
        controller: 'itemsViewController'
    }).
    when('/items/:categoryId/:itemId', {
        templateUrl: 'views/itemspanal.html',
        controller: 'itemsViewController'
    }).
//    when('/newarivals', {
//        templateUrl: 'views/tabs/newarivals.html',
//        controller: 'newarivals'
//    }).
//    when('/login', {
//        templateUrl: 'views/tabs/login.html',
//        controller: 'login'
//    }).
    when('/home', {
        templateUrl: 'views/home.html'
    }).
//    when('/customer',{templateUrl: 'views/tabs/customer.php', 
//        controller: 'customerController'
//    }).
    otherwise('/home',{
        
    });


    // use the HTML5 History API
//    $locationProvider.html5Mode(true);
}]);


app.controller('appController',['$scope',function($scope){
        
    $scope.test = 'this is home page';
        
}]);
