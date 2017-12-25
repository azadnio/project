<?php

//backend interface to manipulate customers,orders,items,invoices.. (view, update..)

require './user.php';
require './item.php';

//recieve post data details
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
  


//depends on method execute actions
switch ($request->method){
    
    case 'insertCustomer':
        $userProvider = new userProvider();
        echo $userProvider->addNewCustomer($request->data);
        break;
    
    case 'insertItem':
        $userProvider = new itemsProvider();
        echo $userProvider->addNewItem($request->data);
        break;
    
    case 'loadCustomers':
        $userProvider = new userProvider();
        echo $userProvider->loadAllCustomers();
        break;
}
