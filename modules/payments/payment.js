
app.controller('paymentsController',['$scope','$routeParams','paymentsProvider','modalDialog',function($scope, $routeParams, paymentsProvider, modalDialog){
    
    $scope.showAddNewChequeDialog = false;
    
    if($routeParams.id){
        
        if($routeParams.id.toLowerCase() === 'new'){
            //adding a new customer
            $scope.addingNewPayments = true;
            $scope.payment = {
                chequesList: [],
                paymentType: 1,
                returnedChequesList: []
                
            };
        }
        else{
            //viewing payments info by id
            $scope.payment = paymentsProvider.getPaymentDetails($routeParams.id);
            $scope.addingNewPayments = false;
            
        }        
    }
    else{
        
        $scope.payments = paymentsProvider.loadPayments();
    }
    
    //table sorting controls(accending or decending by property)
        $scope.sort         = 'id';
        $scope.reverse      = false;
    
    $scope.selectCutomer = function(){
        modalDialog.showModalDialog('views/modal-dialogs/customer-list.html', 'customer-list').then(function(selectedCustomer){
            console.log(selectedCustomer);
            $scope.payment.customerName = selectedCustomer.name;
        });
    };
    
    $scope.addNewCheque = function(){
        modalDialog.showModalDialog('views/modal-dialogs/cheque.html', 'cheque-dialog').then(function(cheque){
            $scope.payment.chequesList.push(cheque);
        });
    };
    
    $scope.removeCheque = function(chq){
        console.log(chq);
    };
    
    $scope.getChquePaymentsTotal = function(){
        var total = null;
        $scope.payment.chequesList.forEach(function(cheque){
            total += cheque.amount;
        });
        
        return (total)? total : '';
    };
    
    $scope.getReturnedChquePaymentsTotal = function(){
        var total = null;
        $scope.payment.returnedChequesList.forEach(function(cheque){
            total += cheque.amount;
        });
        
        return (total)? total : '';
    };
    
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
        
        getPaymentDetails:function(paymentId){
            return{
                paymentId:paymentId,
                paymentType:1,
                date: '20-7-2017',
                cashAmount: '10000',
                chequesList:[{
                        id: '001',
                        date:'20-01-2017',
                        status: 1,
                        number: '1231',
                        amount: 20000,
                        paymentId: '000',         
                        bank:'BOC',
                        accountNo: '00000000',
                        remarks:'some remarks'
                },{
                        id: '002',
                        date:'20-01-2017',
                        status: 1,
                        number: '1233',
                        amount: 20000,
                        paymentId: '000',         
                        bank:'BOC',
                        accountNo: '00000000',
                        remarks:'some remarks'
                },{
                        id: '003',
                        date:'20-01-2017',
                        status: 1,
                        number: '1234',
                        amount: 20000,
                        paymentId: '000',         
                        bank:'BOC',
                        accountNo: '00000000',
                        remarks:'some remarks'
                }],
                returnedChequesList: []
            };
        },
    };
}]);