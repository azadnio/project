<!DOCTYPE html>
<html>
    <head>
        
        <title>Capital Hardware Administration</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
        <link rel="stylesheet" type="text/css" href="../assets/css/app.css">
        <link rel="stylesheet" type="text/css" href="../assets/css/modal-dialogs.css">
        <link rel="stylesheet" type="text/css" href="../assets/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="../assets/css/animation.css">
        <script src="../assets/js/angular.min.js"></script>
        <script src="../assets/js/angular-route.min.js"></script>
        <script src="../assets/js/angular-animate.min.js"></script>
        <!--<script src="../data.js"></script>-->
        <!--date picker-->        
        <script type="text/javascript" src="../assets/lib/datepicker/js/angular-datepicker.js"></script>
        <link rel="stylesheet" type="text/css" href="../assets/lib/datepicker/css/angular-datepicker.css">
        
        <script src="./admin.js"></script>
        <script src="../modules/items/items.js"></script>
        <script src="../modules/customer/customer.js"></script>
        <script src="../modules/cheque/cheque.js"></script>
        <script src="../modules/payments/payment.js"></script>
        <script src="../modules/account/accounts.js"></script>
        <script src="../modules/invoice/invoice.js"></script>
        <script src="../modules/order/orders.js"></script>
        
        <script src="./modaldialogs.js"></script>
        <!--        <script src="./js/items.js"></script>
                <script src="./js/account.js"></script>-->
        <script src="../js/utils.js"></script>
    </head> 
    <body ng-app="app" ng-controller="appController">
        
        <div id="logo" class="table-row">   
            <div>
                <img src="../assets/images/app/logo.png" style="    height: 100px;">
                <!--<img src="../assets/images/app/header.png" style="top: -20px; position: relative;     height: 75px;">-->
                <div style="    DISPLAY: inline-block;
                     position: absolute;
                     top: 40px;
                     font-size: 32px;
                     font-weight: bold;">
                    <span style='color:#FF0000;'>C</span><span style='color:#F80006;'>U</span><span style='color:#F1000D;'>S</span><span style='color:#EA0014;'>T</span><span style='color:#E4001A;'>O</span><span style='color:#DD0021;'>M</span><span style='color:#D60028;'>E</span><span style='color:#D0002E;'>R</span> <span style='color:#C2003C;'>O</span><span style='color:#BB0043;'>R</span><span style='color:#B50049;'>D</span><span style='color:#AE0050;'>E</span><span style='color:#A70057;'>R</span><span style='color:#A1005D;'>S</span> <span style='color:#93006B;'>A</span><span style='color:#8C0072;'>N</span><span style='color:#860078;'>D</span> <span style='color:#780086;'>P</span><span style='color:#72008C;'>A</span><span style='color:#6B0093;'>Y</span><span style='color:#64009A;'>M</span><span style='color:#5D00A1;'>E</span><span style='color:#5700A7;'>N</span><span style='color:#5000AE;'>T</span> <span style='color:#4300BB;'>M</span><span style='color:#3C00C2;'>A</span><span style='color:#3500C9;'>N</span><span style='color:#2E00D0;'>A</span><span style='color:#2800D6;'>G</span><span style='color:#2100DD;'>E</span><span style='color:#1A00E4;'>M</span><span style='color:#1400EA;'>E</span><span style='color:#0D00F1;'>N</span><span style='color:#0600F8;'>T</span>
                </div>
            </div>
        </div>
        
        <div id="nav-bar" class="table-row">
            <a href="./#/home" style="    width: 28px;
               position: relative;
               height: 19px;"><i class="fa fa-home fa-2x" aria-hidden="true" style="position: absolute;
                 top: 5px;color: #891515;
                 left: 16px;"></i></a>
            <a href="./#/customers" ng-class="{ active: isActive('customers')}">Customers</a>
            <a href="./#/payments" ng-class="{ active: isActive('payments')}">Payments</a>
            <a href="./#/cheques" ng-class="{ active: isActive('cheques')}">Cheques</a>
            <a href="./#/orders" ng-class="{ active: isActive('orders')}">Orders</a>
            <a href="./#/invoices" ng-class="{ active: isActive('invoices')}">Invoices</a>
            <a href="./#/accounts" ng-class="{ active: isActive('accounts')}">Accounts</a>
            <a href="./#/items" ng-class="{ active: isActive('items')}">Items</a>           
            <a href="./#/returns" ng-class="{ active: isActive('trn')}">Sales Return</a> 
            <a href="./#/reports" ng-class="{ active: isActive('reports')}">Reports</a>
            <a style="font-weight: bold;color: red;">Logout</a>
            <a style="float: right; font-style: italic; color: #3c3a3a;" href=""><i class="fa fa-user"></i>User : {{loggedInUserName}}</a>
        </div>
        <section class="table" ng-hide="isActive('home')">
            <div ng-view class="dis-table"></div>
        </section>
        <div ng-include="modalDialogUrl"></div>
        
        <div class="home-cont table-row" ng-show="isActive('home')">
            <div>
                <div>
                    <a href="./#/invoices" class="home-block-btn" style="background: #2f78b2; color: white;">
                        <span>
                            <i class="fa fa-file-text-o fa-3x" aria-hidden="true" title="Create A Invoice"></i>
                            invoices
                        </span>
                    </a>
                    <a href="./#/orders" class="home-block-btn" style="background: #955151; color: white; position: relative;">
                        <span>
                            <i style="top:30px; color: #4CAF50;" class="fa fa-truck fa-3x" aria-hidden="true"></i>
                            orders
                        </span>
                        <span style="    position: absolute;
                              bottom: -5px;
                              text-align: center;
                              display: block;
                              width: 94%;
                              font-size: 12px;
                              font-style: italic;">2 New Orders</span>
                    </a>
                    <a href="./#/payments" class="home-block-btn" style="background: #2f78b2; color: white;">
                        <span>
                            <i class="fa fa-money fa-3x" aria-hidden="true" title="Creat A Payment"></i>
                            payment
                        </span>
                    </a>
                </div>
                <div>
                    <a href="./#/customers" class="home-block-btn" style="background: #955151; color: white; position: relative;">
                        <span>
                            <i class="fa fa-users fa-3x" aria-hidden="true"></i>
                            customers
                        </span>
                    </a>
                    <div style="display: inline-block;
                         width: 220px;
                         position: relative;"><img style="position: absolute;
                           top: -36px;
                           width: 147px;
                           left: 27px;" src="../assets/images/app/logo.png"></div>
                    <a href="./#/items" class="home-block-btn" style="background: #955151; height: 100px;
                         color: white; position: relative;">
                        <span><i class="fa fa-list fa-3x" aria-hidden="true"></i>Items</span>
                    </a>
                </div>
                <div>
                    <a href="./#/accounts" class="home-block-btn" style="background: #2f78b2;
                         color: white;">
                        <span><i class="fa fa-book fa-3x" aria-hidden="true"></i>Accounts</span>
                    </a>
                    <a href="./#/cheques" class="home-block-btn" style="background: #955151; height: 100px;
                         color: white; position: relative;"><span><i style="left: 69px;
    top: 29px;" class="fa fa-credit-card-alt fa-3x" aria-hidden="true"></i>Cheques</span></a>
                    <a href="./#/returns" class="home-block-btn" style="background: #2f78b2;
                         color: white;"><span><i class="fa fa-mail-reply-all fa-3x" aria-hidden="true">
                             
                            </i>Sales return</span></a>
                </div>
            </div>
        </div>
        
        <div id='login' ng-if='!userLoggedIn' class="table-row">
            <div class="main">
                <div class="login-form">
                    <h1>User Login</h1>
                    <div class="head">
                        <!--<i class="fa fa-user-circle-o fa-5px" aria-hidden="true"></i>-->
                        <img src="../assets/images/app/user.png" alt="">
                    </div>
                    <form>
                        <input type="text" class="text" value="USERNAME" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'USERNAME';}">
                        <input type="password">
                        <div class="submit">
                            <input type="submit" onclick="myFunction()" value="LOGIN">
                        </div>	
                        <label><input type="checkbox">Remember me</label>
                        <p><a href="#">Forgot Password ?</a></p>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
