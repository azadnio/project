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
            case 'orders'   : view = 'order-view';     break;
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

app.controller('orderController',['$scope','$routeParams',function($scope, $routeParams){
        
    console.log($routeParams.id);
        
}]);

app.controller('chequeController',['$scope','$routeParams','accountsProvider',function($scope, $routeParams, accountsProvider){
        
    console.log($routeParams.id);
    $scope.cheque = accountsProvider.getChequeDetails($routeParams.id);
}]);

app.controller('paymentController',['$scope','$routeParams',function($scope, $routeParams){
        
    console.log($routeParams.id);
        
}]);

app.controller('invoiceController',['$scope','$routeParams',function($scope, $routeParams){
        
    console.log($routeParams.id);
        
}]);

app.factory('accountsProvider',[function(){
    return{
        getChequeDetails:function(chequeId){
            return {
                customer:'vamsi',
                amount: 2000,
                chequeNo: '123123',
                bank:'Bank of ceylon',
                accountNo: '21412341234',
                status:'pending',
                remarks:'this is a test cheque'
            }
        }
    };
}]);