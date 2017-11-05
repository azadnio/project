<?php
    include './config.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Capital Hardware</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="assets/css/index.css">
        <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
        <script src="assets/js/angular.min.js"></script>
        <script src="assets/js/angular-route.min.js"></script>
        <script src="./app.js"></script>
        <script src="./modules/items/items.js"></script>
        <script src="./js/account.js"></script>
        <script src="./js/utils.js"></script>
    </head> 
    <body ng-app="app" ng-controller="appController">
        <div id="logo-container">LOGO COMES HERE</div>
        <div id="nav-bar">
            <a href="./" ng-class="{ active: isActive('home')}">Home</a>
            <a href="./#/items" ng-class="{ active: isActive('items')}">Items</a>
            <a href="./#/account" ng-class="{ active: isActive('account')}">My Account</a>
            <a href="./#/profile" ng-class="{ active: isActive('profile')}">Profile</a>
            <a href="./#/contact" class="float-r" ng-class="{ active: isActive('contact')}">Contact Us</a>
            <a href="./#/about" class="float-r" ng-class="{ active: isActive('about')}">About Us</a>
        </div>
        <section>
            <div ng-view></div>
        </section>
        <div id='login' ng-if='!userLoggedIn' style="background: red; height: 400px;">
            <h2>this is the login screen</h2>
        </div>
        <div id='about' style="background: green; height: 400px;">
            <h2>this is the about us  screen</h2>
        </div>
        <div ng-include="modalDialogUrl"></div>
    </body>
</html>
