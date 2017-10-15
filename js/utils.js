app.factory('utils',[function(){
    
    var utils = {
        isValidEmail: function(str){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(str);
        },
        isNumericStr: function(str){
            return str.trim() !== "" && !isNaN(str);
        },
        isValidPhoneNumber: function(str){
            return str.length === 10 && utils.isNumericStr(str);
        }
    };
    
    return utils;
}]);

app.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});

app.factory('modalDialogProvider',[function(){
    var ctrlScope;
    return{
        setScope:function(_scope){
            ctrlScope = _scope;
        },
        
        showItemListDialog:function(){
            ctrlScope.modalDialogUrl = 'views/item-list.html';
        },
        closeModalDialog:function(){
            ctrlScope.modalDialogUrl = '';
        }
    };
}]);

app.directive('chTableSort',[function(){
    //the parent controller must have sorting variable (sort, reverse) 
    //those variables accessed by this directive
    return {
        resctrict:'E',
        replace:true,
        scope:{
            text:'@',
            value:'@'
        },
        controller:['$scope','$element',function($scope,$element){
            $element.on('click',function(){
                
                if($scope.$parent.sort !== $scope.value){
                    $scope.$parent.sort     = $scope.value;
                    $scope.$parent.reverse  = false;
                }
                else{
                    $scope.$parent.reverse = !$scope.$parent.reverse;
                }
                
                $scope.$apply();
            });
        }],
        template:'<a href="" class="table-sort" ng-class="{\'arrow-up\':$parent.reverse,\'arrow-down\':!$parent.reverse}">{{text}}<span ng-show="$parent.sort == value"></span></a>'
    };
}]);