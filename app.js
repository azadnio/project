var app = angular.module("app", ['ngRoute']);

app.config(["$routeProvider", "$locationProvider",function($routeProvider, $locationProvider) {

    $routeProvider.
    when('/items', {
        templateUrl: 'modules/items/itemspanel.php',
        controller: 'itemsViewController'
    }).
    when('/items/:categoryId', {
        templateUrl: 'modules/items/itemspanel.php',
        controller: 'itemsViewController'
    }).
    when('/items/:categoryId/:itemId', {
        templateUrl: 'modules/items/itemspanel.php',
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


app.controller('appController',['$scope','modalDialogProvider','$location',function($scope, modalDialogProvider, $location){
        
    $scope.test = 'this is home page';
        
    $scope.userLogedIn = true;
    
    $scope.chNavigateCount = 0;
    
    $scope.modalDialogUrl = '';
    modalDialogProvider.setScope($scope);
    
    $scope.isActive =  function(viewLocation){
        return $location.path().toLowerCase().indexOf(viewLocation) > - 1;
    };
    
    $scope.user = 'customer';
    
    $scope.imageFolderPath = './assets/images/items/';
}]);
