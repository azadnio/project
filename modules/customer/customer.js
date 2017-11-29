//customer related codes, controllers and factory to support customer manipulation

//main controller for customer tab
app.controller('customersController',['$scope','$routeParams','customerProvider','$location','modalDialog', function($scope, $routeParams, customerProvider, $location, modalDialog){
    
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
            $scope.customerInfo = customerProvider.getCustomerInfo($routeParams.id);
            $scope.addingNewCustomer = false;
            
        }        
    }
    else{
        
        $scope.customers    = customerProvider.loadCustomers();    
        
        //table sorting controls(accending or decending by property)
        $scope.sort         = 'id';
        $scope.reverse      = false;
    }
    
    $scope.filterCustomer = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
    $scope.addNew = function(){
        if($scope.addingNewCustomer){
            customerProvider.addNewCustomer($scope.customerInfo);
            $location.path('/customers/' + $scope.customerInfo.id || '000')
        }
    };
    
    $scope.addNewCustomer = function(){
        modalDialog.showModalDialog('../modules/customer/new-customer.html', 'customer-dialog').then(function(cheque){
            $scope.payment.chequesList.push(cheque);
        });
    };
    
}]);


//controller for customer modal dialog
app.controller('customerDialogController',['$scope','customerProvider','modalDialog','$element',function($scope, customerProvider, modalDialog, $element){
    
    //init customer object
    $scope.customer = new customerProvider.customer();
    
    //reset customer object
    $scope.clear = function(){
        $scope.customer = new customerProvider.customer();
        
        //remove customer image
        angular.element($element[0].querySelector('#customer-image')).removeAttr('src');
        angular.element($element[0].querySelector('#file-upload-customer-image')).val('');
    };
    
    //pass customer objec to caller
    $scope.ok = function(){
        
        console.log($scope.customer.insert());
        
        modalDialog.setPromiseSuccess($scope.customer);
    };
    
    //close the dialog 
    $scope.cancel = function(){
        modalDialog.setPromiseFails();
    };
    
    //upload customer image
    $scope.selectImageFile = function(target){
        var reader = new FileReader();
        reader.onload = function(loadEvent) {
            $scope.$apply(function() {
                $scope.customer.image = loadEvent.target.result;
            });
        };
        reader.readAsDataURL(target.files[0]);
    };
    
}]);

app.factory('customerProvider',['$http',function($http){
    
    var customers = [];
        
    for (var i = 0; i < 15; i++) {
        customers.push({
            id:'00' + i,
            name:'customer ' + i,
            city: 'city ' + i,
            status: i%2,
            unclearedCheques: 20000,
            returnedCheques:200,
            paymentBalance: 20000,
            creditLimit: 100000,
            
        });
    }
    return{
        
        //customer object
        customer: function(){
            return {
                name : '',      address: '',
                city: '',       telephone: '',
                mobile: '',     email: '',
                nic: '',        creditLimit: '',
                userName: '',   password: '',
                image: '',      imageFile:'',
                userId:'',//user who created this customer
                
                insert:function(){
                    $http.post('../server/customer.php',{data:this, method:'insertCustomer'}).then(function(response){
                        console.log(response);
                    });
                }
            };
        },
        
        loadCustomers:function(){
            return customers;
        },
        
        getCustomerInfo:function(id){
            return {
                id:id,
                name:'vamsi',
                city:'matale',
                telephone:'4505455',
                mobile:'55452105',
                email:'vamsi@test.com',
                creditLimit:100000,
                returnChequesTotal:20000,
                paymentBalance:10000,
                address:'the is a test address',
                addedDate:'',
                addedby:'',
                status:1,
            };
        },
        
        addNewCustomer:function(customerData){
            customers.push(customerData);
        }
    };
}]);