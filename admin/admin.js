var app = angular.module("app", ['ngRoute', '720kb.datepicker','ngAnimate']);

app.config(["$routeProvider", "$locationProvider",function($routeProvider, $locationProvider) {

        $routeProvider.
            when('/customers', {
                templateUrl: '../modules/customer/customers.html',
                controller: 'customersController'
            }).
            when('/customers/:id', {
                templateUrl: '../modules/customer/customer-view.html',
                controller: 'customersController'
            }).
            when('/payments', {
                templateUrl: '../modules/payments/payments.html',
                controller: 'paymentsController'
            }).
            when('/payments/:id', {
                templateUrl: '../modules/payments/payment-view.html',
                controller: 'paymentsController'
            }).
            when('/cheques', {
                templateUrl: '../modules/cheque/cheques.html',
                controller: 'chequesController'
            }).
            when('/cheques/:id', {
                templateUrl: '../modules/cheque/cheques.html',
                controller: 'chequesController'
            }).
            when('/orders', {
                templateUrl: '../modules/order/orders.html',
                controller: 'ordersController'
            }).
            when('/orders/:id', {
                templateUrl: '../modules/order/orders-view.html',
                controller: 'ordersController'
            }).
            when('/reports', {
//                    templateUrl: 'views/invoices.html',
//            controller: 'invoicesController'
            }).
            when('/accounts', {
                templateUrl: '../modules/account/accounts.html',
                controller: 'accountsController'
            }).
            when('/accounts/:id', {
                templateUrl: '../modules/account/ledger-view.html',
                controller: 'accountsController'
            }).
            when('/invoices', {
                templateUrl: '../modules/invoice/invoices.html',
                controller: 'invoicesController'
            }).
            when('/invoices/:id', {
                templateUrl: '../modules/invoice/invoice-view.html',
                controller: 'invoicesController'
            }).
            when('/accounts', {
                templateUrl: '../modules/account/accounts.html',
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
        $scope.userLoggedIn = true;
    
        $scope.chNavigateCount = 0;
    
        $scope.modalDialogUrl = '';
        modalDialogProvider.setScope($scope);
    
        
        $scope.isActive =  function(viewLocation){
            return $location.path().toLowerCase().indexOf(viewLocation) > - 1;
        };
        
       // messageDialog.yesNo('afasdf asdfuaskdfjb adsfugasdu fdusafg you yes the adsfsdaf aaor no');
        
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
