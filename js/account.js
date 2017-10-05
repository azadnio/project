app.config(["$routeProvider", "$locationProvider",function($routeProvider, $locationProvider) {
    //config 'account' routing 
    $routeProvider.
            when('/account/:section', {
                templateUrl: 'views/account.html',
                controller: 'myAccountController'
            })
            .when('/account', {
                templateUrl: 'views/account.html',
                controller: 'myAccountController'
            });
}]);

app.controller('myAccountController',['$scope','$routeParams',function($scope, $routeParams){
    
    //routing templates
    $scope.selectedSection = $routeParams.section;
    if(!$scope.selectedSection || ['orders','payments','cheques','invoices'].indexOf($scope.selectedSection) === -1)
        $scope.selectedSection = 'orders'; //default section
    else
        $scope.selectedSection = $scope.selectedSection.toLowerCase();
    
    $scope.view = 'views/' + $scope.selectedSection + '.html';

}]);

app.controller('myOrdersController',['$scope',function($scope){

    $scope.orders = [];
    for(var i=0; i<10;i++)
        $scope.orders.push({
            id: '00' + i,
            date:'20-01-2017',
            status: i%3,
            remarks:'some remarks'
        });
    
    $scope.fDate = '';
    $scope.tDate = '';
    $scope.filterStatus = '';
    
    $scope.cancelOrder = function(orderId){
        
        console.log('cancelling order');
    };    
}]);
