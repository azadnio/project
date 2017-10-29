//controllers for modal dialogs


app.controller('newChequeController',['$scope','chequesProvider','modalDialog',function($scope, chequesProvider, modalDialog){
        
    //create new cheque object
    $scope.cheque = new chequesProvider.cheque();
    $scope.ok = function(){
        modalDialog.setPromiseSuccess($scope.cheque);
    };
    
}]);

app.controller('customersModalDialog',['$scope','customerProvider','modalDialog',function($scope, customerProvider, modalDialog){
        
    //load all customers
    $scope.customers = customerProvider.loadCustomers();
        
    $scope.selectCustomer = function(customer){
        $scope.selectedCustomer = customer;
    };
    
    //when double click on a customer
    $scope.selectAndClose = function(customer){
        modalDialog.setPromiseSuccess(customer);
    };
        
    $scope.ok = function(){
        modalDialog.setPromiseSuccess($scope.selectedCustomer);
    };
}]);

app.controller('itemsModalDialog',['$scope','itemsProvider','modalDialog',function($scope, itemsProvider, modalDialog){
        
    //load all customers
    $scope.customers = itemsProvider.loadCustomers();
    
    $scope.selectedItems = [];
        
    $scope.selectItem = function(item, elm){
        
        if($scope.selectedItems.indexOf(item) > -1){
            $scope.selectedItems.splice($scope.selectedItems.indexOf(item), 1);
            angular.element(elm.target).removeClass('selected');
        }
        else{
            $scope.selectedItems.push(item);
            angular.element(elm.target).addClass('selected');
        }
        
    };
    
    //when double click on a customer
    $scope.selectAndClose = function(customer){
        modalDialog.setPromiseSuccess(customer);
    };
        
    $scope.ok = function(){
        modalDialog.setPromiseSuccess($scope.selectedCustomer);
    };
}]);