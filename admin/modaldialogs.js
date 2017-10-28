app.controller('newChequeController',['$scope','chequesProvider','modalDialog',function($scope, chequesProvider, modalDialog){
        
    //create new cheque object
    $scope.cheque = new chequesProvider.cheque();
    
    $scope.ok = function(){

        modalDialog.setPromiseSuccess($scope.cheque);
    };

    $scope.cancel = function(){

        modalDialog.setPromiseFails();
    };


}]);