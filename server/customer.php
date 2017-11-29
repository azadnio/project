<?php

//backend interface to manipulate customers (view, update..)

require './user.php';

//recieve post data
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);



$userProvider = new userProvider();

//depends on methodf
switch ($request->method){
    
    case 'insertCustomer':
        $userProvider->addNewCustomer($request->data);
        break;
    
}
