/*





app.controller('itemsController',['$scope','status','itemsProvider','$routeParams',function($scope, status, itemsProvider, $routeParams){
    
    if($routeParams.id){
        
        if($routeParams.id.toLowerCase() === 'new'){
            //adding a new customer
            $scope.addingNewCustomer = true;
            $scope.customerInfo = {};
            $scope.customerInfo.id = '020';
            $scope.customerInfo.status = 0;
        }
        else{
            //viewing customer info by id
            $scope.customerInfo = itemsProvider.getCustomerInfo($routeParams.id);
            $scope.addingNewCustomer = false;
            
        }        
    }
    else{
        
        $scope.customers    = itemsProvider.loadItems();    
        
        //table sorting controls(accending or decending by property)
        $scope.sort         = 'id';
        $scope.reverse      = true;
    }
    
    $scope.filterItems = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);

app.factory('itemsProvider',[function(){
    
    var items = [];
        
    for (var i = 0; i < 15; i++) {
        items.push({
            id:'00' + i,
            description: 'Item ' + i,
            status: 1,
            price: 2000,
            category: 'cat '+ i % 3,
            categoryId: i % 3,
            imageUrl: '../doorguard.jpg'
        });
    }
        
    return{
        loadItems:function(){
            return items;
        },
    };
}]);
*/