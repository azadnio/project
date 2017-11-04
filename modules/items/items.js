app.controller('itemsViewController',['$scope','itmesProvider','$routeParams','$location',function($scope, itmesProvider, $routeParams, $location){
        
    $scope.parentScope = $scope.$parent;
        
    $scope.items = itmesProvider.loadItems();
    
    $scope.categoryId   = $routeParams.categoryId;
    $scope.itemId       = $routeParams.itemId;
    
    //set relative path for modules folder
    var pathPre = ($scope.$parent.user === 'admin')?'../':'./';
    
    $scope.view = pathPre + 'modules/items/categoryitems.php';
    if($scope.itemId){
        
        if($scope.parentScope.user === 'admin')
            //view for item administration
                $scope.view = pathPre + 'modules/items/item-view-admin.html';
        else
            //view for customers, online users
            $scope.view = pathPre + 'modules/items/itemview.html';
    }
        
    $scope.newImagesFiles = [];
    $scope.selectImageFile = function(target){
        var reader = new FileReader();
        reader.onload = function(loadEvent) {
            $scope.$apply(function() {
                $scope.newImagesFiles.push({
                    file: target.files[0], 
                    bs64: loadEvent.target.result,
                    name: target.files[0].name
                });
            });
        };
        reader.readAsDataURL(target.files[0]);
    };
        
    if(!$scope.categoryId)
        $scope.categoryId = $scope.items[0].categoryId;
    
    //view items as list or blocks
    //get previous value from local storage
    $scope.itemListView = localStorage.getItem("itemListView") === 'true';
    $scope.toggleView = function(){
        $scope.itemListView = !$scope.itemListView;
        //set it to local storage
        localStorage.setItem('itemListView', $scope.itemListView);
    };
}]);

app.controller('itemcontroller',['$scope','$routeParams','itmesProvider','$element',function($scope, $routeParams,itmesProvider ,$element,$timeout){
        
    var itemId = $routeParams.itemId;
    
    $scope.selectedCategory = '';
    
    
    $scope.categories = itmesProvider.getItemCatgories();
    
    $scope.item = itmesProvider.getItemByItemId(itemId);
    $scope.selectedCategory = $scope.item.category;
    
    $scope.slide = function(count){
        
        if($scope.selectedImageIndex + count > $scope.item.images.length -1)
            $scope.selectedImageIndex = 0;
        else if($scope.selectedImageIndex + count < 0)
            $scope.selectedImageIndex = $scope.item.images.length - 1;
        else 
            $scope.selectedImageIndex += count;
    };
        
    $scope.selectedImageIndex = 0;
    
    //supportive functions and variables for view user clicked image in original/zoomed view
    var clickedImageHolder = angular.element($element[0].querySelector('#clicked-image'));
    clickedImageHolder.on('click',function(){
        clickedImageHolder.removeClass('clicked-image');
        clickedImageHolder.attr('src', '');
    });
    $scope.zoomImage = function(imagePath){
        clickedImageHolder.attr('src', imagePath);
        clickedImageHolder.addClass('clicked-image');
    };
}]);


app.factory('itmesProvider',[function(){
        
    var items = [];
        
    for (var i = 0; i < 10; i++) {
        items.push({
            id: '00' + i,
            category:'cat '+i,
            categoryId:'cat_'+i,
            item:'item ' + i ,
            description: 'this siisd sisdvnsdvnvasvasvasdvnavv adfvfvbfav uav auisv avuavvisdfvfv',
            price:'1000',
            quantity:1,
            unit: 'Nos',
            images:['doorhandle2.jpg','doorhandle.jpg','doorhanle.jpg']
        });
    }
        
    return{
        
        loadItems:function(){
            //request php
            return items;
        },
        
        getItemCatgories: function(){
            //request php
            var op = [];
            for (var i = 0; i < 5; i++) {
                op.push({
                    id: 'cat_'+ i,
                    category:'cat '+i
                });
            }
            return op;
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

app.directive('chItem',[function(){
    return{
        restrict: 'E',
        replace:true,
        scope: {itemId: '=id',price: '=price',name: '=name', description: '=description', url:'=url', categoryId:'=categoryid'},
        controller: ['$scope','$element', '$attrs', function ($scope, element, attrs) {
                
                //check this item already added to order if it is disable adding again to the order
                $scope.isItemAddedToOrder = function(){
                    
//                    for(var i = 0; i < $scope.$parent.orderedItems.length; i++)
//                        if($scope.$parent.orderedItems[i].id === $scope.itemId){
//                            $scope.itemAdded = true;
//                            return true;
//                        }
//                    
//                    $scope.itemAdded = false;
                    return false;
                };
                
                $scope.itemAdded = false;
                
//                $scope.addToOrder = function(){
//                    if(!$scope.itemAdded)
//                    //add to order
//                        order.addItemToOrder($scope.$parent.orderedItems, $scope.itemId);
//                    
//                    else
//                    //remove item from order
//                        order.removeItemFromOrder($scope.$parent.orderedItems, $scope.itemId);
//                    
//                };
                
                $scope.getBtnCaption = function(){
                    return ($scope.itemAdded) ? "Remove from Order" : "Add to order";
                };
                
        }],
    
        template:'<div class="item-prev-template">'+
                '<div class="item-title">{{name}}</div>'+
                '<div class="item-image-wrap">'+
                    '<span class="item-price">Rs {{price}}</span>'+
                    '<img ng-src="{{$parent.imageFolderPath + url}}" class="item-prev-image">'+
                '</div>'+
                '<div class="item-desc">{{description}}</div>'+
                '<button ng-if="$parent.userLogedIn" ng-class="{disabled:isItemAddedToOrder()}" class="add-to-order" ng-click="addToOrder()">{{getBtnCaption()}}</button>'+
                '<a href="./#/items/{{categoryId}}/{{itemId}}" ng-click="viewItem()" style=" color: blue; text-decoration: none; text-transform: uppercase;">View</a></div>'  
    };
}]);

app.directive('chNavigateBack',[function(){
    return {
        resctrict:'E',
        replace:true,
        controller:['$scope','$element',function($scope,$element){
            $element.on('click',function(){
                console.log('go back');
            });
        }],
        template:'<button ng-if="chNavigateCount">Back</button>'
    };
}]);