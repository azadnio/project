app.config(["$routeProvider", "$locationProvider",function($routeProvider, $locationProvider) {
    //config 'account' routing 
    $routeProvider.
            when('/account/:section', {
                templateUrl: 'views/account.html',
                controller: 'myAccountController'
            })
            .when('/account/:section/:id', {
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
    
    var view = $scope.selectedSection;
    
    //user select and id for view details
    $scope.id = $routeParams.id;
    if($scope.id){
        switch(view){
            case 'orders'   : 
                if($routeParams.id.toLowerCase() === 'new')
                    view = 'new-order';
                else
                    view = 'order-view';     
                break;
            case 'payments' : view = 'payment-view';   break;
            case 'cheques'  : view = 'cheque-view';    break;
            case 'invoices' : view = 'invoice-view';   break;
        }        
    }
    
    $scope.view = 'views/' + view + '.html';

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

app.controller('newOrderController',['$scope','modalDialogProvider','ordersProvider',function($scope, modalDialogProvider, ordersProvider){
    
    $scope.newOrder = ordersProvider.getOrderedItems();
    
    $scope.removeFromOrder = function(item){
        ordersProvider.removeItem(item);
    };
    
    $scope.showItemList = function(){
         modalDialogProvider.showItemListDialog();
     };
     
     
    
}]);

app.controller('itemListController',['$scope','modalDialogProvider','itmesProvider','ordersProvider',function($scope, modalDialogProvider, itmesProvider,ordersProvider){
        
    $scope.items = itmesProvider.loadItems();
        
    $scope.close = function(){
        modalDialogProvider.closeModalDialog();
    };
    
    $scope.addItemToOrder = function(item){
        ordersProvider.addItem(item);
    };
    
    $scope.removeItemFromOrder = function(item){
        ordersProvider.removeItem(item);
    };
    
    $scope.isItemInOrder = ordersProvider.isItemInOrder;
}]);

app.controller('myChequesController',['$scope',function($scope){

    $scope.cheques = [];
    for(var i=0; i<10;i++)
        $scope.cheques.push({
            id: '00' + i,
            date:'20-01-2017',
            status: i%3,
            number: '123' + i,
            amount: 20000,
            paymentId: '000',         
            bank:'BOC',
            accountNo: '00000000',
            remarks:'some remarks'
        });
    
    $scope.fDate = '';
    $scope.tDate = '';
    $scope.filterStatus = '';
    
}]);


app.controller('myPaymentsController',['$scope',function($scope){

    $scope.payments = [];
    for(var i=0; i<10;i++)
        $scope.payments.push({
            id: '00' + i,
            receivedDate:'20-01-2017',
            amount: 30000,           
            remarks:'some remarks'
        });
    
    $scope.fDate = '';
    $scope.tDate = '';
    
}]);

app.controller('myInvoicesProvider',['$scope',function($scope){

    $scope.invoices = [];
    for(var i=0; i<10;i++)
        $scope.invoices.push({
            id: '00' + i,
            orderId:'000',
            date: '20-2-2017',    
            total: '12500',            
            remarks:'some remarks'
        });
    
    $scope.fDate = '';
    $scope.tDate = '';
    
}]);

app.controller('orderController',['$scope','$routeParams','accountsProvider',function($scope, $routeParams, accountsProvider){
        
    console.log($routeParams.id);
    $scope.order = accountsProvider.getOrderDetails();
        
}]);

app.controller('chequeController',['$scope','$routeParams','accountsProvider',function($scope, $routeParams, accountsProvider){
        
    console.log($routeParams.id);
    $scope.cheque = accountsProvider.getChequeDetails($routeParams.id);
}]);

app.controller('paymentController',['$scope','$routeParams','accountsProvider',function($scope, $routeParams, accountsProvider){
        
    $scope.payment = accountsProvider.getPaymentDetails($routeParams.id);
    
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
    
}]);

app.controller('invoiceController',['$scope','$routeParams','accountsProvider',function($scope, $routeParams, accountsProvider){
        
    console.log($routeParams.id);
    
    $scope.invoice = accountsProvider.getInvoiceDetails();
    
    $scope.getInvoiceSubtotal = function(){
        var total = 'test total';
        
        return total;
    };
        
}]);

app.factory('accountsProvider',[function(){
    return{
        getChequeDetails:function(chequeId){
            return {
                chequeId: chequeId,
                customer:'vamsi',
                amount: 2000,
                chequeNo: '123123',
                bank:'Bank of ceylon',
                accountNo: '21412341234',
                status:'pending',
                remarks:'this is a test cheque'
            };
        },
        
        getOrderDetails:function(orderId){
            return {
                orderId: orderId,
                orderedDate: '20-02-2017',
                status:1,
                invoiceNo:'001',
                remarks: 'this is a test order',
                orderedItems:[{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_1',
                    orderedPrice: '5000',
                    quantity:3
                },{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_2',
                    orderedPrice: '5000',
                    quantity:3
                },{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_3',
                    orderedPrice: '5000',
                    quantity:3
                },{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_4',
                    orderedPrice: '5000',
                    quantity:3
                }]
            };
        },
        
        getPaymentDetails:function(paymentId){
            return{
                paymentId:paymentId,
                paymentType:1,
                receivedDate: '20-7-2017',
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
        
        getInvoiceDetails:function(invoiceId){
            return {
                invoiceNo:'001',
                invoiceDate:'20-7-2017',
                orderNo:'000',
                preparedAndCheckedBy:'vamsithequeen',
                invoicedItems:[{
                        itemId:'000',
                        categoryId:'cat_1',
                        description:'test',
                        quantity:4,
                        price:2000,
                        discount:0
                },{
                        itemId:'000',
                        categoryId:'cat_1',
                        description:'test',
                        quantity:5,
                        price:2000,
                        discount:10
                },{
                        itemId:'000',
                        categoryId:'cat_1',
                        description:'test',
                        quantity:3,
                        price:2000,
                        discount:5
                },{
                        itemId:'000',
                        categoryId:'cat_1',
                        description:'test',
                        quantity:6,
                        price:2000,
                        discount:0
                }]
            };
        }
    };
}]);

app.factory('ordersProvider',[function(){
    var myOrder = [{
        itemId: '001',
        name:'test',
        category:'category',
        categoryId:'cat_1',
        price:210,
        quantity:5
    }];

    return {
        getOrderedItems:function(){
            return myOrder;
        },
        addItem:function(item){
            myOrder.push(item);
        },
        
        removeItem:function(item){
            myOrder.splice(myOrder.indexOf(item), 1);
        },
        isItemInOrder:function(itemId){
            for (var i = 0; i < myOrder.length; i++) {
                if(myOrder[i].id === itemId)
                    return true;
            }
            return false;
        }
    };
}]);