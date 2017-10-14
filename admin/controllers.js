app.controller('customersController',['$scope','modalDialogProvider','customerProvider',function($scope, modalDialogProvider, customerProvider){
    
    $scope.customers = customerProvider.loadCustomers();
    
    $scope.filterCustomer = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);

app.controller('chequesController',['$scope','modalDialogProvider','chequesProvider',function($scope, modalDialogProvider, chequesProvider){
    
    $scope.cheques = chequesProvider.loadCheques();
    
    $scope.filterCheques = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);

app.factory('chequesProvider',[function(){
    
    var cheques = [];
        
    for (var i = 0; i < 15; i++) {
        cheques.push({
            id:'00' + i,
            chequeNo:'00000' + i,
            customerId: '00' + i,
            status: i%3,
            amount: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
        });
    }
        
    return{
        loadCheques:function(){
            return cheques;
        },
    };
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

app.controller('paymentsController',['$scope','modalDialogProvider','paymentsProvider',function($scope, modalDialogProvider, paymentsProvider){
    
    $scope.payments = paymentsProvider.loadPayments();
    
    $scope.filterCheques = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);

app.factory('paymentsProvider',[function(){
    
    var payments = [];
        
    for (var i = 0; i < 15; i++) {
        payments.push({
            id:'00' + i,
            customerId: '00' + i,
            amount: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
        });
    }
        
    return{
        loadPayments:function(){
            return payments;
        },
    };
}]);

app.controller('invoicesController',['$scope','modalDialogProvider','invoicesProvider',function($scope, modalDialogProvider, invoicesProvider){
    
    $scope.invoices = invoicesProvider.loadInvoices();
    
    $scope.filterCheques = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);

app.factory('invoicesProvider',[function(){
    
    var invoices = [];
        
    for (var i = 0; i < 15; i++) {
        invoices.push({
            id:'00' + i,
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            paymentStatus:i%2,
        });
    }
        
    return{
        loadInvoices:function(){
            return invoices;
        },
    };
}]);

app.controller('ordersController',['$scope','modalDialogProvider','ordersProvider',function($scope, modalDialogProvider, ordersProvider){
    
    $scope.orders = ordersProvider.loadOrders();
    
    $scope.filterOrders = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);

app.factory('ordersProvider',[function(){
    
    var orders = [];
        
    for (var i = 0; i < 15; i++) {
        orders.push({
            id:'00' + i,
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            status:i%3,
            remarks:'send it today'
        });
    }
        
    return{
        loadOrders:function(){
            return orders;
        },
    };
}]);