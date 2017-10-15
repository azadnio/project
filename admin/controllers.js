app.controller('customersController',['$scope','$routeParams','customerProvider','$location',function($scope, $routeParams, customerProvider, $location){
    
    if($routeParams.id){
        
        if($routeParams.id.toLowerCase() === 'new'){
            //adding a new customer
            $scope.addingNewCustomer = true;
        }
        else{
            //viewing customer info by id
            $scope.customerInfo = customerProvider.getCustomerInfo($routeParams.id);
            $scope.addingNewCustomer = false;
        }        
    }
    else{
        
        $scope.customers    = customerProvider.loadCustomers();    
        
        //table sorting controls(accending or decending by property)
        $scope.sort         = 'id';
        $scope.reverse      = true;
    }
    
    $scope.filterCustomer = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
    $scope.addNew = function(){
        if($scope.addingNewCustomer){
            customerProvider.addNewCustomer($scope.customerInfo);
            $location.path('/customers/' + $scope.customerInfo.id || '000')
        }
    };
    
    $scope.upadate = function(){
        
    }
    
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
        
        getCustomerInfo:function(id){
            return {
                id:id,
                name:'vamsi',
                city:'matale',
                telephone:'4505455',
                mobile:'55452105',
                email:'vamsi@test.com',
                creditLimit:100000,
                returnChequesTotal:20000,
                paymentBalance:10000,
                address:'the is a test address',
                addedDate:'',
                addedby:'',
                status:1,
            };
        },
        
        addNewCustomer:function(customerData){
            customers.push(customerData);
        }
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

app.controller('itemsController',['$scope','modalDialogProvider','invoicesProvider',function($scope, modalDialogProvider, invoicesProvider){
    
    $scope.invoices = invoicesProvider.loadInvoices();
    
    $scope.filterCheques = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);

app.factory('itemsProvider',[function(){
    
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
