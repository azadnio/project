<?php

//backend interface to manipulate customers,orders,items,invoices.. (view, update..)

require './user.php';
require './item.php';

//recieve post data
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);






//depends on method execute actions
switch ($request->method){
    
    case 'insertCustomer':
        $userProvider = new userProvider();
        $userProvider->addNewCustomer($request->data);
        break;
    
    case 'insertItem':
        $userProvider = new itemsProvider();
        $userProvider->addNewItem($request->data);
        break;
}
