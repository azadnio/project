<?php

    session_start();

    // Set session variables default values;
    $_SESSION['user'] = 'admin';

    //check user types
    $isUserStaff    = $_SESSION['user'] === 'staff';
    $isUserAdmin    = $_SESSION['user'] === 'admin';
    $isUserCustomer = $_SESSION['user'] === 'custosmer';

