app.controller('chequesController',['$scope','modalDialogProvider','chequesProvider',function($scope, modalDialogProvider, chequesProvider){
    
    $scope.cheques = chequesProvider.loadCheques();
    
    $scope.filterCheques = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);

app.factory('chequesProvider',[function(){
    
    var cheques = [];
        
    for (var i = 0; i < 15; i++) {
        cheques.push({
            id:'00' + i,
            chequeNo:'00000' + i,
            customerId: '00' + i,
            status: i%3,
            amount: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
        });
    }
        
    return{
        
        //cheque object
        cheque: function(){
            this.id = '';
            this.chequeNo = '';
            this.customerId = '';
            this.status = 0;
            this.amount ='';
            this.date = '';
            this.customerName = '';
            this.remarks = '';
        },
        
        loadCheques:function(){
            return cheques;
        },
        
    };
}]);