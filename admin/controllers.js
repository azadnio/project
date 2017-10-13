app.controller('customersController',['$scope','modalDialogProvider','customerProvider',function($scope, modalDialogProvider, customerProvider){
    
    $scope.customers = customerProvider.loadCustomers();
    
    
}]);

app.factory('customerProvider',[function(){
    
    var customers = [];
        
    for (var i = 0; i < 15; i++) {
        customers.push({
            id:'00' + i,
            name:'customer ' + i,
            city: 'city ' + i,
            status: i%2,
            unclearedCheques: 20000,
            returnedCheques:200,
            paymentBalance: 20000,
            creditLimit: 100000,
            
        });
    }
        
    return{
        loadCustomers:function(){
            return customers;
        },
    };
}]);