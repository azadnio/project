//customer related codes, controllers and factory to support customer manipulation

//main controller for customer tab
app.controller('customersController',['$scope','$routeParams','customerProvider','$location','modalDialog', function($scope, $routeParams, customerProvider, $location, modalDialog){
    
    //to show the cannot find customer template
    $scope.customerNotFound = false;
    
    //url has customer id
    if($routeParams.id){
        
        if($routeParams.id.toLowerCase() === 'new'){
            //adding a new customer
            $scope.addingNewCustomer = true;
            $scope.customer = {};
//            $scope.customer.id = '020';
//            $scope.customer.status = 0;
        }
        else{
            //viewing customer info by id
            customerProvider.getCustomerInfo($routeParams.id).then(function(response){
                
                if(response.status >= 200 && response.status < 300 && response.data && response.data.status){
                    $scope.customer = response.data.customer;
                    console.log($scope.customer);
                }
                else
                    $scope.customerNotFound = true;
                
            }, function(){
                alert('Error in contecting to server');
            });
            
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
            customerProvider.addNewCustomer($scope.customer);
            //            $location.path('/customers/' + $scope.customerInfo.id || '000')
        }
    };
    
    //show new customer dialog when click on add new customer button
    $scope.addNewCustomer = customerProvider.showAddNewCustomerDialog;
    
    //reset password incase of forgot
    $scope.resetPassword = function(){
        alert('resetting customer password');
    };
}]);


//controller for customer modal dialog
app.controller('customerDialogController',['$scope','customerProvider','modalDialog','$element','user',function($scope, customerProvider, modalDialog, $element, user){

    //init customer object
    $scope.customer = new customerProvider.customer();
    
    //set added user
    $scope.customer.userId = user.id;
    
    //reset customer object
    $scope.clear = function(){
        $scope.customer = new customerProvider.customer();
        
        //remove customer image
        angular.element($element[0].querySelector('#customer-image')).removeAttr('src');
        angular.element($element[0].querySelector('#file-upload-customer-image')).val('');
    };
    
    //pass customer objec to caller
    $scope.ok = function(){
        
        //save the customer
        customerProvider.addNewCustomer($scope.customer)
            //handle the promises
            .then(function(res){
                //prompt relavent messages
                if(res.status >= 200 && res.status < 300 && res.data === '1'){
                    alert('Customer successfully saved');
                    modalDialog.setPromiseSuccess($scope.customer);
                }
                else
                    alert('Customer Cannot be saved try again shortly');
                
            },function(){
                //cannot connect to the server
                alert('Cannot connect to the netwrok/internal server error');
            });
        
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

app.factory('customerProvider',['$http','modalDialog',function($http, modalDialog){
    
    var customers = [];
        
//    for (var i = 0; i < 15; i++) {
//        customers.push({
//            id:'00' + i,
//            name:'customer ' + i,
//            city: 'city ' + i,
//            status: i%2,
//            unclearedCheques: 20000,
//            returnedCheques:200,
//            paymentBalance: 20000,
//            creditLimit: 100000,
//            
//        });
//    }
    
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
                userId:''//user who created this customer
                
                
            };
        },
        
        //load all customers from database
        loadCustomers:function(){
            
            //empty existing array
            customers = [];
            
            //request server for all customers
            $http.post('../server/request.php',{method:'loadCustomers'}).then(function(e){
                
                if(e.data && (e.status >= 200 && e.status < 300)){
                    //customer list recieved add it to customer array
                    e.data.forEach(function(cust){
                        customers.push(cust);
                    });
                }
                else{
                    //error while loading customers
                    console.error(e);
                    alert('A error occured while loading customers try agin later');
                }
                
            }, function(e){
                //cannot connect the server path
                alert('A network error occured try agin later');
                console.error(e);
            });
            
            return customers;
        },
        
        addNewCustomer:function(customer){
            
            //save customer to database
            return $http.post('../server/request.php',{data:customer, method:'insertCustomer'});
        },
        
        getCustomerInfo:function(id){
            
            return $http.post('../server/request.php',{data:{id:id}, method:'getCustomerDetails'});
            
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
        
        showAddNewCustomerDialog:function(){
            
            //show the customer modal dialog for adding new customer
            modalDialog.showModalDialog('../modules/customer/new-customer.html', 'customer-dialog').then(function(customer){
                customers.push(customer);
            });
        }
        
    };
}]);