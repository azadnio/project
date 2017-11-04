var app = angular.module("app", ['ngRoute']);

app.config(["$routeProvider", "$locationProvider",function($routeProvider, $locationProvider) {

        $routeProvider.
            when('/customers', {
                templateUrl: 'views/customers.html',
                controller: 'customersController'
            }).
            when('/customers/:id', {
                templateUrl: 'views/customer-view.html',
                controller: 'customersController'
            }).
            when('/payments', {
                templateUrl: 'views/payments.html',
                controller: 'paymentsController'
            }).
            when('/payments/:id', {
                templateUrl: 'views/payment-view.html',
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
            when('/orders/:id', {
                templateUrl: 'views/orders-view.html',
                controller: 'ordersController'
            }).
                when('/reports', {
//                    templateUrl: 'views/invoices.html',
//            controller: 'invoicesController'
            }).
            when('/accounts', {
                templateUrl: 'views/accounts.html',
                controller: 'accountsController'
            }).
            when('/accounts/:id', {
                templateUrl: 'views/ledger-view.html',
                controller: 'accountsController'
            }).
            when('/invoices', {
                templateUrl: 'views/invoices.html',
                controller: 'invoicesController'
            }).
            when('/invoices/:id', {
                templateUrl: 'views/invoice-view.html',
                controller: 'invoicesController'
            }).
            when('/accounts', {
                templateUrl: 'views/accounts.html',
                controller: 'accountsController'
            }).
            when('/items', {
                templateUrl: '../modules/items/itemspanel.php',
                controller: 'itemsViewController'
            }).
            when('/items/:categoryId', {
                templateUrl: '../modules/items/itemspanel.php',
                controller: 'itemsViewController'
            }).
            when('/items/:categoryId/:itemId', {
                templateUrl: '../modules/items/itemspanel.php',
                controller: 'itemsViewController'
            }).
        otherwise('/home',{
        
        });


        // use the HTML5 History API
        //    $locationProvider.html5Mode(true);
    }]);


app.controller('appController',['$scope','modalDialogProvider','$location','messageDialog','modalDialog',function($scope, modalDialogProvider, $location, messageDialog, modalDialog){
        
        $scope.test = 'this is home page';
        $scope.fn = function(){console.log('test');};
        $scope.userLogedIn = true;
    
        $scope.chNavigateCount = 0;
    
        $scope.modalDialogUrl = '';
        modalDialogProvider.setScope($scope);
    
        $scope.isActive =  function(viewLocation){
            return $location.path().toLowerCase().indexOf(viewLocation) > - 1;
        };
        
        
                
        $scope.test = function(){
            messageDialog.ok(' ok message').then(function(){
                console.log('yes');
            },function(){
                console.log('reject');
            });
        };
        
        $scope.user = 'admin';
        $scope.imageFolderPath = '../assets/images/items/';
    }]);
