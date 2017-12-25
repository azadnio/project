app.controller('ordersController',['$scope','modalDialogProvider','ordersProvider',function($scope, modalDialogProvider, ordersProvider){
    
    $scope.orders = ordersProvider.loadOrders();
    //table sorting controls(accending or decending by property)
        $scope.sort         = 'id';
        $scope.reverse      = false;
        
    $scope.tot = 0;
    $scope.getTotal = function(){
        var tot = 0;
        $scope.orders.forEach(function(item){
            tot += item.total;
        });
        return tot;
    };
        
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
    orders.push({
            id:'010',
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            status:i%3,
            remarks:'send it today'
        });
        
        orders.push({
            id:'011',
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            status:i%3,
            remarks:'send it today'
        });
        
    return{
        loadOrders:function(){
            return orders;
        },
    };
}]);