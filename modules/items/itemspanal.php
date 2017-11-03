<div class="flex">
    
    <div class="left-view-panel">
        <?php
            include '../../config.php';            
            if($userType === 'customer')
                echo '<div class=""><button>Add New</button></div>';
        ?>
        
        <div class="header">Category</div>    
        <div class="vertical-menu">            
            <a ng-repeat="item in items | unique : 'category'" ng-href="./#/items/{{item.categoryId}}" ng-class="{'selected-category': categoryId == item.categoryId}" >{{item.category}}</a>
        </div>
           
    </div>
        
    <div ng-include="view"  class="right-selected-panel"></div>
</div>