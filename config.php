<?php

    session_start();

    // Set session variables default values;
    $_SESSION['user'] = 'admin';

    //check user types
    $isUserStaff    = $_SESSION['user'] === 'staff';
    $isUserAdmin    = $_SESSION['user'] === 'admin';
    $isUserCustomer = $_SESSION['user'] === 'custosmer';
    
    //global variable to indicate app being develop or not
    $develop = true;
    //application version
    $version = '0.1';
    //selects js minified files while not in develop mode
    $jsExtension = ($develop)?'':'.min'; 
    

