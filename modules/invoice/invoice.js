app.controller('invoicesController',['$scope','$routeParams','invoicesProvider',function($scope, $routeParams, invoicesProvider){
    
    if($routeParams.id){
        
        if($routeParams.id.toLowerCase() === 'new'){
            //adding a new customer
            $scope.addingNewInvoice = true;
            $scope.invoiceInfo = {};
            $scope.invoiceInfo.id = '020';
            $scope.invoiceInfo.status = 0;
        }
        else{
            //viewing customer info by id
            $scope.invoiceInfo = invoicesProvider.getInvoeiceInfo($routeParams.id);
            $scope.addingNewCustomer = false;
            
        }        
    }
    else{
        $scope.invoices = invoicesProvider.loadInvoices();
    }
    
    
    
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
        getInvoeiceInfo:function(id){
          return{
              id: id,
              customerId:'000',
              customerName:'test name',
              remarks:'test rearks',
              created:'2017-7-2',
              createdBy:'user',
              items:[{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_1',
                    price: '5000',
                    discount:'14',
                    quantity:3
                },{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_2',
                    price: '5000',
                    discount:'14',
                    quantity:3
                },{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_3',
                    price: '5000',
                    discount:'14',
                    quantity:3
                },{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_4',
                    price: '5000',
                    discount:'14',
                    quantity:3
                }]
          };  
        },
    };
}]);