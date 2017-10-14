var app = angular.module("app", ['ngRoute']);

app.config(["$routeProvider", "$locationProvider",function($routeProvider, $locationProvider) {

        $routeProvider.
            when('/customers', {
                templateUrl: 'views/customers.html',
                controller: 'customersController'
            }).
            when('/payments', {
                templateUrl: 'views/payments.html',
                controller: 'paymentsController'
            }).
            when('/cheques', {
                templateUrl: 'views/cheques.html',
                controller: 'chequesController'
            }).
            when('/orders', {
                templateUrl: 'views/orders.html',
                controller: 'ordersController'
            }).
                when('/reports', {
//                    templateUrl: 'views/invoices.html',
//            controller: 'invoicesController'
        }).
            when('/invoices', {
                templateUrl: 'views/invoices.html',
                controller: 'invoicesController'
            }).
        when('/home', {
//            templateUrl: 'views/home.html'
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
    }]);
