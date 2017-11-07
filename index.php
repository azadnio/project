<?php
    include './config.php';
?>
<!DOCTYPE html>
<html>
    <head>
        
        <script src="./data.js"></script>
        
        <title>Capital Hardware</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="assets/css/index.css">
        <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
        <script src="assets/js/angular.min.js"></script>
        <script src="assets/js/angular-route.min.js"></script>
        
        
        <!--include js file extensions and version-->
        <script src="./app<?php echo $jsExtension ?>.js?v=<?php echo $version?>"></script>
        <script src="./modules/items/items<?php echo $jsExtension ?>.js?v=<?php echo $version?>"></script>
        <script src="./js/account<?php echo $jsExtension ?>.js?v=<?php echo $version?>"></script>
        <script src="./js/utils<?php echo $jsExtension ?>.js?v=<?php echo $version?>"></script>
    </head> 
    <body ng-app="app" ng-controller="appController">
        <div id="logo">   
            <div>
                <img src="assets/images/app/logo.png">
                <img src="assets/images/app/header.png" style="top: -20px; position: relative;">
            </div>
        </div>
        <div id="nav-bar">
            <a href="./" ng-class="{ active: isActive('home')}">Home</a>
            <a href="./#/items" ng-class="{ active: isActive('items')}">Items</a>
            <a href="./#/account" ng-class="{ active: isActive('account')}">My Account</a>
            <a href="./#/profile" ng-class="{ active: isActive('profile')}">Profile</a>
            <a href="./#/orders" style="color: green;font-weight: bold;" ng-if="orderedItems.length > 0"><i class="fa fa-truck" aria-hidden="true" style="margin-right: 8px;"></i>GO TO MY ORDER</a>
            <a href="./#/contact" class="float-r" ng-class="{ active: isActive('contact')}">Contact Us</a>
            <a href="./#/about" class="float-r" ng-class="{ active: isActive('about')}">About Us</a>
            <a href="./#/logout" style="color: red;font-weight: bold;" class="float-r" ng-class="{ active: isActive('about')}">LOGOUT</a>
        </div>
        <section>
            <div ng-view></div>
        </section>
        <!--to do use single template for customer and admin login-->
        <div id='login' ng-if='!userLoggedIn'>
            <div class="main">
                <div class="login-form">
                    <h1>Customer Login</h1>
                    <div class="head">
                        <img src="assets/images/app/user.png" alt="">
                    </div>
                    <form>
                        <input type="text" class="text" value="USERNAME" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'USERNAME';}">
                        <input type="password" value="Password"></input>
                        <div class="submit">
                            <input type="submit" onclick="myFunction()" value="LOGIN">
                        </div>	
                        <label><input type="checkbox">Remember me</label>
                        <p><a href="#">Forgot Password ?</a></p>
                    </form>
                </div>
            </div>
        </div>
        <div id='about' style="background: green; height: 400px;">
            <h2>this is the about us  screen</h2>
        </div>
        <div ng-include="modalDialogUrl"></div>
    </body>
</html>
