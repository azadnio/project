app.controller('itemsViewController',['$scope','itmesProvider','$routeParams','$location',function($scope, itmesProvider, $routeParams, $location){
        
    $scope.items = itmesProvider.loadItems();
    
    $scope.categoryId   = $routeParams.categoryId;
    $scope.itemId       = $routeParams.itemId;
    
    $scope.view = './views/categoryitems.html';
    if($scope.itemId)
        $scope.view = './views/item.html';
        
    $scope.selectedCategoryId = $scope.items[0].categoryId;
        
    $scope.currentPath = $location.absUrl();
}]);

app.controller('itemcontroller',['$scope','$routeParams','itmesProvider',function($scope, $routeParams,itmesProvider){
        
    var itemId = $routeParams.itemId;
    
    $scope.item = itmesProvider.getItemByItemId(itemId);

        
}]);

app.factory('itmesProvider',[function(){
        
    var items = [];
        
    for (var i = 0; i < 10; i++) {
        items.push({
            id: '00' + i,
            category:'cat '+i,
            categoryId:'cat_'+i,
            name:'item 1',
            description: 'this siisd sisdvnsdvnvasvasvasdvnavv adfvfvbfav uav auisv avuavvisdfvfv',
            price:'1000 rs'
        });
    }
        
    return{
        
        loadItems:function(){
            return items;
        },
        
        getItemByItemId:function(itemId){
            
            for(var i =0;i<items.length;i++)
                if(items[i].id == itemId)
                    return items[i];
            
            //send server request
            
            return false;
        }
    };
}]);

