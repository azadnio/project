
app.factory('accountsProvider',[function(){
    
    var accounts = [];
        
    for (var i = 0; i < 15; i++) {
        accounts.push({
            id:'00' + i,
            customerId: '00' + i,
            balance: 20000,
            lastInvoiceDate: '2-10-2017',
            lastPaymentDate: '2-10-2017',
            customerName:'customer ' + i,
        });
    }
        
    return{
        loadAccounts:function(){
            return accounts;
        },
        
        getCustomerLedgerData:function(id){
            return {
                month:4,
                year:'2017',
                bf: 1000,
                data:[{
                        date:'1-4-2017',
                        transaction:'Invoice',
                        invoiceNo:'000',
                        amount:1000,
                        isDebit:true,
                        type:1
                    },{
                        date:'1-5-2017',
                        transaction:'invoice',
                        invoiceNo:'001',
                        amount:1000,
                        isDebit:true,
                        type:1
                    },{
                        date:'1-5-2017',
                        transaction:'payment',
                        paymentNo:'001',
                        amount:1000,
                        isDebit:false,
                        type:2
                    },{
                        date:'1-10-2017',
                        transaction:'cheque return',
                        chequeId:'000',
                        bank:'BOC',
                        accountNo:'21312312',
                        amount:1000,
                        isDebit:true,
                        type:3
                    },{
                        date:'1-21-2017',
                        transaction:'payment',
                        invoiceNo:'000',
                        amount:1000,
                        isDebit:false,
                        type:2
                    }]
            };
        },
    };
}]);

app.controller('accountsController',['$scope','$routeParams','accountsProvider',function($scope, $routeParams, accountsProvider){
    
    $scope.customers =[];// customers;
    
    if($routeParams.id){
        
        
    }
    else{
        $scope.accounts = accountsProvider.loadAccounts();
    }
    
    $scope.ledgerData = accountsProvider.getCustomerLedgerData($routeParams.id );
    
    
    
    $scope.filterOrders = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);
