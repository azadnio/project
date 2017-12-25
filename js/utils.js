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

app.factory('messageDialog',['$compile','$rootScope','$q',function($compile,$rootScope,$q){
    var deferred, $messageDialog;
    function _appendDialog(text, dialogType){
        $messageDialog = $compile("<ch-message-dialog class='message-dialog' type="+ dialogType +" message='"+ text + "'></ch-message-dialog>")($rootScope);
        deferred = $q.defer();
        angular.element(document.body).append($messageDialog);
        return deferred.promise;
    }
    
    //removing message dialog from DOM
    function removeDilaog(){
        if($messageDialog){
            $messageDialog.remove();
            $messageDialog = null;
        }
    }
        
    return{
        ok:function(text){
            return _appendDialog(text, 'oc');
        },
        yesNo:function(text){
            return _appendDialog(text, 'yn');
        },
        okCancel:function(text){
            return _appendDialog(text, 'oc');
        },
        yesNoCancel:function(text){
            return _appendDialog(text, 'ync');
        },
        
        //calling these functions from diretive which depends on user selection
        setPromiseSuccess:function(value){
            //when promise successed pass value true or false
            if(deferred){
                deferred.resolve(value);
                deferred = null;
                removeDilaog();
            }
        },
        
        setPromiseFails:function(){
            //when user cancelled the message
            if(deferred){
                deferred.reject();
                deferred = null;
                removeDilaog();
            }
        }
    };
}]);

app.directive('chMessageDialog',[function(){
    return{
        restrict:'EA',
        replace:true,
        scope:{
            type:'@', //posible types (oc, ync, yn)
            'message':'@'
        },
        controller:['$scope','messageDialog',function($scope, messageDialog){
                                
            $scope.ok = function(){
                messageDialog.setPromiseSuccess(true);
            };
            $scope.cancel = function(){
                messageDialog.setPromiseFails(false);
            };
            $scope.no = function(){
                messageDialog.setPromiseSuccess(false);
            };
        }],
        template:   '<div class="ch-message message-wrap">'+
                        '<div class="message-overlay"></div>'+
                        '<div class="message-box">'+
                            '<div class="message-header"><img src="" alt="Logo"/></div>'+
                            '<div class="message-text">{{message}}</div>'+
                            '<div class="message-buttons">'+
                                '<button ng-click="ok()" ng-if="type=\'oc\'">Ok</button>'+
                                '<button ng-click="ok()" ng-if="type==\'ync\' || type==\'yn\'">Yes</button>'+
                                '<button ng-click="no()" ng-if="type==\'ync\' || type==\'yn\'">No</button>'+
                                '<button ng-click="cancel()" ng-if="type==\'ync\' || type==\'oc\'">Cacel</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
    };
}]);

app.factory('modalDialog',['$rootScope','$compile','$q',function($rootScope, $compile, $q){
        
    var $dialog, deferred;
        
     function removeDilaog(){
        if($dialog){
            $dialog.remove();
            $dialog = null;
        }
    }
        
    return{
        showModalDialog: function(url,dialogClass){
            $dialog = $compile("<ch-modal-dialog dialogurl="+ url +" userclass="+ dialogClass +"></ch-modal-dialog>")($rootScope);
            deferred = $q.defer();
            angular.element(document.body).append($dialog);
            return deferred.promise;
        },
        
         setPromiseSuccess:function(value){
            //when promise successed pass value
            if(deferred){
                deferred.resolve(value);
                deferred = null;
                removeDilaog();
            }
        },
        
        setPromiseFails:function(){
            //when user cancelled the message
            if(deferred){
                deferred.reject();
                deferred = null;
                removeDilaog();
            }
        }
    };
}]);

app.directive('chModalDialog',[function(){
    return{
        restrict: 'E',
        replace: true,
        controller:['$scope','$attrs','modalDialog',function($scope,$attrs, modalDialog){
                    
            $scope.dialogurl = $attrs.dialogurl;
            $scope.userclass = $attrs.userclass; 
            
            $scope.close = function(){
                modalDialog.setPromiseFails();
            };
            
        }],
        template:   '<div class="ch-modal-dialog">'+
                        '<div class="overlay" ng-dbclick="close()" title="Double Click To CLOSE the Dialog"></div>'+
                        '<div class="content" ng-class="userclass" ng-include="dialogurl"></div>'+
                    '</div>'
    };
}]);

//constant value for status of items, customer, cheques, payments, ..
app.constant('status',{
    
    items:{
        deleted: 0,
        active: 1        
    },
    
    ccustomer:{
        deleted: 0,
        active: 1
    },
    
    payments:{
        pending:0,
        paid:1        
    },
    
    cheques:{
        pending: 0,
        passed: 1,
        returned: 2       
    }
    
});

//listen navigate event of browser to close all acitive modal dialogs
window.addEventListener('popstate', function(){
        
    var elements = document.getElementsByClassName('ch-modal-dialog');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
});
