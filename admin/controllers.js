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
        modalDialog.showModalDialog('views/modal-dialogs/customer-view.html', 'customer-dialog').then(function(cheque){
            $scope.payment.chequesList.push(cheque);
        });
    };
    
}]);

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

app.factory('customerProvider',[function(){
    
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

app.controller('paymentsController',['$scope','$routeParams','paymentsProvider','modalDialog',function($scope, $routeParams, paymentsProvider, modalDialog){
    
    $scope.showAddNewChequeDialog = false;
    
    if($routeParams.id){
        
        if($routeParams.id.toLowerCase() === 'new'){
            //adding a new customer
            $scope.addingNewPayments = true;
            $scope.payment = {
                chequesList: [],
                paymentType: 1,
                returnedChequesList: []
                
            };
        }
        else{
            //viewing payments info by id
            $scope.payment = paymentsProvider.getPaymentDetails($routeParams.id);
            $scope.addingNewPayments = false;
            
        }        
    }
    else{
        
        $scope.payments = paymentsProvider.loadPayments();
    }
    
    //table sorting controls(accending or decending by property)
        $scope.sort         = 'id';
        $scope.reverse      = false;
    
    $scope.selectCutomer = function(){
        modalDialog.showModalDialog('views/modal-dialogs/customer-list.html', 'customer-list').then(function(selectedCustomer){
            console.log(selectedCustomer);
            $scope.payment.customerName = selectedCustomer.name;
        });
    };
    
    $scope.addNewCheque = function(){
        modalDialog.showModalDialog('views/modal-dialogs/cheque.html', 'cheque-dialog').then(function(cheque){
            $scope.payment.chequesList.push(cheque);
        });
    };
    
    $scope.removeCheque = function(chq){
        console.log(chq);
    };
    
    $scope.getChquePaymentsTotal = function(){
        var total = null;
        $scope.payment.chequesList.forEach(function(cheque){
            total += cheque.amount;
        });
        
        return (total)? total : '';
    };
    
    $scope.getReturnedChquePaymentsTotal = function(){
        var total = null;
        $scope.payment.returnedChequesList.forEach(function(cheque){
            total += cheque.amount;
        });
        
        return (total)? total : '';
    };
    
    $scope.filterCheques = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);

app.factory('paymentsProvider',[function(){
    
    var payments = [];
        
    for (var i = 0; i < 15; i++) {
        payments.push({
            id:'00' + i,
            customerId: '00' + i,
            amount: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
        });
    }
        
    return{
        loadPayments:function(){
            return payments;
        },
        
        getPaymentDetails:function(paymentId){
            return{
                paymentId:paymentId,
                paymentType:1,
                date: '20-7-2017',
                cashAmount: '10000',
                chequesList:[{
                        id: '001',
                        date:'20-01-2017',
                        status: 1,
                        number: '1231',
                        amount: 20000,
                        paymentId: '000',         
                        bank:'BOC',
                        accountNo: '00000000',
                        remarks:'some remarks'
                },{
                        id: '002',
                        date:'20-01-2017',
                        status: 1,
                        number: '1233',
                        amount: 20000,
                        paymentId: '000',         
                        bank:'BOC',
                        accountNo: '00000000',
                        remarks:'some remarks'
                },{
                        id: '003',
                        date:'20-01-2017',
                        status: 1,
                        number: '1234',
                        amount: 20000,
                        paymentId: '000',         
                        bank:'BOC',
                        accountNo: '00000000',
                        remarks:'some remarks'
                }],
                returnedChequesList: []
            };
        },
    };
}]);

app.controller('invoicesController',['$scope','$routeParams','invoicesProvider',function($scope, $routeParams, invoicesProvider){
    
    if($routeParams.id){
        
        if($routeParams.id.toLowerCase() === 'new'){
            //adding a new customer
            $scope.addingNewInvoice = true;
            $scope.invoiceInfo = {};
            $scope.invoiceInfo.id = '020';
            $scope.invoiceInfo.status = 0;
        }
        else{
            //viewing customer info by id
            $scope.invoiceInfo = invoicesProvider.getInvoeiceInfo($routeParams.id);
            $scope.addingNewCustomer = false;
            
        }        
    }
    else{
        $scope.invoices = invoicesProvider.loadInvoices();
    }
    
    
    
    $scope.filterCheques = {
        status:'',
        toDate:'',
        fromDate:''
    };
    
}]);

app.factory('invoicesProvider',[function(){
    
    var invoices = [];
        
    for (var i = 0; i < 15; i++) {
        invoices.push({
            id:'00' + i,
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            paymentStatus:i%2,
        });
    }
        
    return{
        loadInvoices:function(){
            return invoices;
        },
        getInvoeiceInfo:function(id){
          return{
              id: id,
              customerId:'000',
              customerName:'test name',
              remarks:'test rearks',
              created:'2017-7-2',
              createdBy:'user',
              items:[{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_1',
                    price: '5000',
                    discount:'14',
                    quantity:3
                },{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_2',
                    price: '5000',
                    discount:'14',
                    quantity:3
                },{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_3',
                    price: '5000',
                    discount:'14',
                    quantity:3
                },{
                    itemId:'000',
                    name:'Test item',
                    categoryId:'cat_4',
                    price: '5000',
                    discount:'14',
                    quantity:3
                }]
          };  
        },
    };
}]);

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

app.factory('accountsProvider',[function(){
    
    var accounts = [];
        
    for (var i = 0; i < 15; i++) {
        accounts.push({
            id:'00' + i,
            customerId: '00' + i,
            balance: 20000,
            lastInvoiceDate: '2-10-2017',
            lastPaymentDate: '2-10-2017',
            customerName:'customer ' + i,
        });
    }
        
    return{
        loadAccounts:function(){
            return accounts;
        },
        
        getCustomerLedgerData:function(id){
            return {
                month:4,
                year:'2017',
                bf: 1000,
                data:[{
                        date:'1-4-2017',
                        transaction:'Invoice',
                        invoiceNo:'000',
                        amount:1000,
                        isDebit:true,
                        type:1
                    },{
                        date:'1-5-2017',
                        transaction:'invoice',
                        invoiceNo:'001',
                        amount:1000,
                        isDebit:true,
                        type:1
                    },{
                        date:'1-5-2017',
                        transaction:'payment',
                        paymentNo:'001',
                        amount:1000,
                        isDebit:false,
                        type:2
                    },{
                        date:'1-10-2017',
                        transaction:'cheque return',
                        chequeId:'000',
                        bank:'BOC',
                        accountNo:'21312312',
                        amount:1000,
                        isDebit:true,
                        type:3
                    },{
                        date:'1-21-2017',
                        transaction:'payment',
                        invoiceNo:'000',
                        amount:1000,
                        isDebit:false,
                        type:2
                    }]
            };
        },
    };
}]);

app.controller('accountsController',['$scope','$routeParams','accountsProvider',function($scope, $routeParams, accountsProvider){
    
    
    if($routeParams.id){
        
        $scope.ledgerData = accountsProvider.getCustomerLedgerData($routeParams.id);
    }
    else{
        $scope.accounts = accountsProvider.loadAccounts();
    }
    
    
    
    
    
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
